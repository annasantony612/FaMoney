import {View, Text, ImageBackground} from 'react-native';
import React, {useContext} from 'react';
import Button from '../components/Button';
import {TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../Context';
import AtmCard from '../../assets/images/AtmCard.png';
import LoginButton from '../components/LoginButton';
const Start = () => {
  const {signIn} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3}}>
        <ImageBackground
          source={AtmCard}
          // resizeMode="cover"
          style={{
            height: 200,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}></ImageBackground>
      </View>

      <View style={{flex: 4}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
            Create An Account
          </Text>
        </View>

        <View
          style={{
            paddingLeft: 30,
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <Text style={{paddingBottom: 10, color: 'black'}}>Name</Text>
          <TextInput
            style={{
              width: 300,
              height: 41,
              backgroundColor: '#D9D9D9',
              borderRadius: 10,
              color: 'black',
            }}></TextInput>
          <Text style={{paddingBottom: 10, paddingTop: 30, color: 'black'}}>
            Email ID
          </Text>

          <TextInput
            style={{
              width: 300,
              height: 41,
              backgroundColor: '#D9D9D9',
              borderRadius: 10,
              color: 'black',
            }}></TextInput>
        </View>
      </View>

      <View style={{flex: 2, alignItems: 'center'}}>
        <LoginButton onPress={() => signIn()} title="Sign up" />
      </View>
    </View>
  );
};

export default Start;
