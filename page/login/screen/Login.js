import React, {Component, useEffect, useState} from 'react';
import LoginScreen, {SocialButton} from 'react-native-login-screen';
import {View, StyleSheet} from 'react-native';

function Login({navigation}) {
    return (
        <View style={styles.container}>
            <LoginScreen
                logoImageSource={require('../../../assets/img/logo.png')}
                onLoginPress={() => {
                    navigation.navigate('Bottom');
                }}
                onSignupPress={() => {}}
                onEmailChange={(email: string) => {}}
                onPasswordChange={(password: string) => {}}>
                <SocialButton text="Continue with Google" onPress={() => {}} />
                <SocialButton
                    text="Continue with Facebook"
                    imageSource={require('../../../assets/img/facebook.png')}
                    onPress={() => {}}
                />
                <SocialButton
                    text="Continue with Twitter"
                    imageSource={require('../../../assets/img/twitter.png')}
                    onPress={() => {}}
                />
            </LoginScreen>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
