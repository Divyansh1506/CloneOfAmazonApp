import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react';
import { AntDesign, Feather } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const AddAddressScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{
                    flexDirection: 'row', alignItems: 'center', marginHorizontal: 7,
                    gap: 10, backgroundColor: "white", borderRadius: 3, height: 30, flex: 1
                }}>
                    <AntDesign style={{ paddingLeft: 10 }} name="search1" size={20} color="black" />
                    <TextInput placeholder="Search Amazon.in" />
                </Pressable>
                <Feather name="mic" size={22} color="black" />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: '500', fontSize: 20 }}>Your Addresses</Text>
                <Pressable onPress={() =>
                    navigation.navigate("Add")
                } style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, borderColor: 'd0d0d0', borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0, paddingHorizontal: 5, paddingVertical: 7 }}>
                    <Text>Add a new Address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})



// 3.26