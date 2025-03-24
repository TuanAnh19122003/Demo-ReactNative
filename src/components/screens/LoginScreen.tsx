import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React from 'react'

export default function loginScreen() {
    return (
        <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 15, width: '100%' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Sign in</Text>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={{ paddingLeft: 4 }}>Username/Email</Text>
                        <TextInput
                            placeholder='Username/email'
                            style={{ borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ paddingLeft: 4 }}>Password</Text>
                        <TextInput
                            placeholder='Password'
							secureTextEntry={true}
                            style={{ borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="first"
                        />
                        <Text>Remember me</Text>
                    </View>
                    <Text style={{ color: 'cyan' }}>Forgot Password ?</Text>
                </View>
            </View>

            <TouchableOpacity style={{ marginTop: 20, borderRadius: 10, backgroundColor: '#16B4BC', padding: 15, width: '100%' }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Log In</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 35 }}>Sign in with</Text>
            <View style={{ marginTop: 35, flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignContent: 'center' }}>
                <Image
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                    source={require('../../assets/twitter.jpg')}
                />
                <Image
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                    source={require('../../assets/facebook.jpg')}
                />
                <Image
                    style={{ height: 70, width: 70, borderRadius: 50 }}
                    source={require('../../assets/google.jpg')}
                />
            </View>
            <TouchableOpacity style={{ marginTop: 35 }}>
                <Text>New user? <Text style={{ color: '#16B4BC' }}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    )
}