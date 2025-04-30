import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router"

export default function userID() {
    const {id}= useLocalSearchParams();
    return <Text className='text-lg'>USUARIO : {id}</Text>
}

const styles = StyleSheet.create({})