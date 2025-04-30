//rnfs
//Este comando genera un Functional Component de React Native con Stylesheet. El resultado sería algo como:
//rnfes 
//Este genera un Functional Component con exportación nombrada y usando arrow function, con estructura moderna. Algo como esto:
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})