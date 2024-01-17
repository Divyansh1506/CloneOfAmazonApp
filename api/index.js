const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const crypto = require("crypto")
const nodemailer = require("nodemailer")

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

app.listen(port, () => {
    console.log("Server is running on Port 8000")
});


mongoose.connect("mongodb+srv://divyansh15062001:divyansh15062001@cluster0.heeolps.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected Sucessfull")
}).catch((err) => {
    console.log("ERROR", err)
});



const User = require("./models/user")
// const Order = require("./models/order")



// function to send verification Email to the user 

const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transport 
    const transporter = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth: {
            user: "divyanshsarathe2001@gmail.com",
            pass: "ziqfyekbbhfskrbs"
        },
    });

    //Compose the email message

    var mailOptions = {
        from: 'amazon.com',
        to: email,
        subject: 'Email Verification',
        text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
    };

    //Send the email 
    try {
        await transporter.sendMail(mailOptions);
        console.log("Sent mail successfully")
    } catch (error) {
        console.log("Error Sending Verification Email", error)
    }
};

//Endpoint to register in the app
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //if the email is already register
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("Email already registered:", email);
            return res.status(400).json({ message: "Email Already Registered" });
        }

        //Create a new user
        const newUser = new User({ name, email, password });

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to the database
        await newUser.save();

        console.log("New User Registered", newUser);

        //send verification to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(201).json({
            message:
                "Registration successful. Please check your email for verification.",
        });
    } catch (error) {
        console.log("Error Register User", error);
        res.status(500).json({ message: "Registration Failed" })
    }
});

//Endpoint to verify the user
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        //find the user with the verification token
        const user = await User.findOne({ verificationToken: token })
        if (!user) {
            return res.status(404).json({ message: "Invalid Verification Token" })
        }

        //mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        //save the user to the database
        await user.save();

        res.status(200).json({ message: "User Verified" });
    } catch (error) {
        res.status(500).json({ message: "Couldn't find the user with the verification" });
    }
});


const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");

    return secretKey;
}
const secretKey = generateSecretKey();


//Endpoint to login the user

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        //check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        //generate a token
        const token = jwt.sign({ userId: user._id }, secretKey);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login Failed" });
    }
});


// Add a new Address

app.post("/addresses", async (req, res) => {
    try {
        const { userId, address } = req.body;

        // Find the Userid by the UserId field
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message:"User not found"});
        }

        // add the new address  to the addresses array
        user.addresses.push(address);

        // Save the new address to the backend
        await user.save();

        res.status(200).json({message:'Address Created successfully'})
    } catch (error) {
        res.status(500).json({ message: "Error adding address" });
    }
})


// 3.47