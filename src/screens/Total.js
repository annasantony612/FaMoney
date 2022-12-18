import {View, Text} from 'react-native';
import React from 'react';

const Total = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingTop: 40,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              Total Liabilities
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              ₹ 500000
            </Text>
          </View>
        </View>
      </View>

      <View style={{flex: 5}}>
        <View style={{paddingLeft: 20}}>
          <Text style={{color: '#808080', fontSize: 18}}>
            Chits/Installments/Loans...
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,

            padding: 10,
          }}>
          <View
            style={{backgroundColor: '#D9D9D9', padding: 10, borderRadius: 10}}>
            <View style={{padding: 10}}>
              <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
                SBI Loan
              </Text>
            </View>
            <View style={{padding: 10}}>
              <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
                Car EMI
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <Text style={{color: 'black'}}></Text>
      </View>
    </View>
  );
};

export default Total;
