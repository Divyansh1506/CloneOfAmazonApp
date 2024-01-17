import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const AddressScreen = () => {

  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <ScrollView style={{ marginTop: 25 }}>
      <View style={{ height: 50, backgroundColor: "#00CED1" }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add a new Address</Text>

        <TextInput placeholderTextColor={"black"} placeholder='India' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Full Name (First and last name)</Text>
          <TextInput
            value={name}
            onChange={(text) => setName(text)}
            placeholderTextColor={"black"} placeholder='Enter Your Name' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />

        </View>

        <View >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mobile Number</Text>
          <TextInput
            value={mobileNo}
            onChange={(text) => setMobileNo(text)}
            placeholderTextColor={"black"} placeholder='Mobile No' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Flat, House No, Building, Company</Text>
          <TextInput
            value={houseNo}
            onChange={(text) => setHouseNo(text)}
            placeholderTextColor={"black"} placeholder='' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Area, Street, Sector, Village</Text>
          <TextInput
            value={street}
            onChange={(text) => setStreet(text)}
            placeholderTextColor={"black"} placeholder='' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Landmark</Text>
          <TextInput
            value={landmark}
            onChange={(text) => setLandmark(text)}
            placeholderTextColor={"black"} placeholder='Ex: Near Paliwal Bhawan' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pincode</Text>
          <TextInput
            value={postalCode}
            onChange={(text) => setPostalCode(text)}
            placeholderTextColor={"black"} placeholder='Enter a Pincode' style={{ padding: 10, borderColor: '#d0d0d0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} />
        </View>

        <Pressable onPress={} style={{ backgroundColor: '#FFC72C', padding: 18, borderRadius: 6, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})

// 3.31