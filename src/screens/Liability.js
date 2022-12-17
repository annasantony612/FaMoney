import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Liability = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.container1}>
        <Text style={Styles.text1}>💰Add Liabilities</Text>
      </View>
      <View style={Styles.container2}>
        <Text style={Styles.text2}> Name</Text>

        <View style={Styles.textbox}>
          <Text></Text>
        </View>

        <Text style={Styles.text2}>Total Amount</Text>
        <View style={Styles.textbox}>
          <Text></Text>
        </View>
        <Text style={Styles.text2}>Installment Amount</Text>
        <View style={Styles.textbox}>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Liability;
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
    fontWeight: '600',
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