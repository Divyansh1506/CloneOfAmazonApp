import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");

                if (token) {
                    navigation.replace("Main");
                }
            } catch (err) {
                console.log("Error Message", err);
            }
        };
        checkLoginStatus();
        }, [])
    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };
        axios.post("http://localhost:8000/login", user).then((response) => {
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            navigation.replace("Main");
        }).catch((error) => {
            Alert.alert("Login Error", error);
            console.log(error);
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View style={{ marginTop: 10 }}>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 10,
                        color: "#041E42",
                    }}>
                        Login to Your Account
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        backgroundColor: "#d0d0d0",
                        paddingVertical: 5,
                        marginTop: 30,
                        borderRadius: 5,
                    }}>
                        <MaterialIcons style={{ marginLeft: 10 }}
                            name="email"
                            size={24}
                            color="gray" />

                        <TextInput value={email}
                            onChangeText={(text) => setEmail(text)} style={{
                                color: "gray", marginVertical: 10, width: 250,
                                fontSize: email ? 16 : 16,
                            }}
                            placeholder='Enter Your Email' />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        backgroundColor: "#d0d0d0",
                        paddingVertical: 5,
                        marginTop: 15,
                        borderRadius: 5,
                    }}>
                        <Entypo style={{ marginLeft: 10 }} name="lock" size={24} color="grey" />

                        <TextInput value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 250,
                                fontSize: email ? 16 : 16
                            }}
                            placeholder='Enter Your Password' />
                    </View>
                </View>

                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "space-between", flexDirection: 'row',
                        marginTop: 10
                    }}>

                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: 500 }}>Forgot Password?</Text>
                </View>
                <View style={{ marginTop: 50 }} />

                <Pressable onPress={handleLogin}
                    style={{
                        width: 200,
                        backgroundColor: '#febe10',
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 15 }}>
                    <Text style={{
                        textAlign: 'center',
                        color: "gray",
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Don't have an account? Sign Up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({})