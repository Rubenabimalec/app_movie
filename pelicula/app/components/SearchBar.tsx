import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props{
    onPress: () => void;
    placeHolder: string;
}



const SearchBar = ({onPress,placeHolder}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-ful px-5 py-5'>
      <Ionicons className='search-outline' size={20} color={"white"}></Ionicons>
      <TextInput
            onPress={onPress}
            placeholder={placeHolder}
            placeholderTextColor= "#A8B5DB"
            value=""
            onChangeText={()=>{}}
            className='flex-1 ml-2 text-white'
      
      
      ></TextInput>

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})