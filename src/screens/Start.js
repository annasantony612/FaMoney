import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../components/Button';

const Start = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          paddingLeft: 30,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{paddingBottom: 10, paddingTop: 30, color: 'black'}}>
          Name
        </Text>
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
        <Text style={{paddingBottom: 10, paddingTop: 30, color: 'black'}}>
          Mobile Number
        </Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            color: 'black',
          }}
          onChangeText={e => setPhone(e)}></TextInput>
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => example().then(_ => signIn())} title="Login" />
      </View>
    </View>
  );
};

export default Start;
