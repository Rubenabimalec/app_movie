import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
interface Props{
    onPress?:()=>void;
    placeHolder:string;
    value: string,
    onChangeText: (text: string) => void
}

const SearchBar=({onPress,placeHolder,value, onChangeText}:Props)=> {
    return(

        <View className="flex-row items-center bg-sky-200 rounded-full px-5 py-5">
            <Ionicons name="search-outline" size={40} color={"black"}/>
            <TextInput 
        onPress={onPress}
        placeholder={placeHolder}
        placeholderTextColor={"#A8B5DB"}
        value={value}
        onChangeText={onChangeText}
        editable={!!onChangeText}
        className="flex-1 ml-2 text-black"

                />
        </View>

    );
};
export default SearchBar;
const styles = StyleSheet.create({});