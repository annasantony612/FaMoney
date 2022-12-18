import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../components/Button';
const Bills = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.container1}>
        <Text style={Styles.text1}>🧾 Bills</Text>
      </View>
      <View style={Styles.container2}>
        <Text style={Styles.text2}> Name</Text>
        <TextInput
          style={{
            width: 300,
            height: 41,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            color: 'black',
          }}></TextInput>

        <Text style={Styles.text2}>Installment Amount</Text>
        <TextInput
          style={{
            color: 'black',
            width: 300,
            height: 41,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
          }}></TextInput>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}>
        <Button onPress={() => navigation.navigate('Home')} title="Save" />
      </View>
    </View>
  );
};

export default Bills;
Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    padding: 10,
  },
  container2: {
    flex: 4,
    paddingLeft: 30,
  },
  text1: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 30,
  },
  text2: {
    padding: 10,
    fontSize: 15,
    color: 'black',
  },
  textbox: {
    width: 300,
    height: 41,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
});
