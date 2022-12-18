import {View, Text, Button} from 'react-native';
import React from 'react';
import {AuthContext} from '../Context';

const Profile = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 2,
          backgroundColor: '#02C3BD',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 40,
            fontWeight: '700',
            paddingBottom: 10,
            paddingLeft: 20,
          }}>
          Anna S
        </Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: '700',
            paddingLeft: 20,
          }}>
          annas@gmail.com
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          paddingBottom: 20,
          paddingHorizontal: 30,
          paddingTop: 40,
        }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#D9D9D9',
          }}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: '500'}}>
            Overview ...
          </Text>
        </View>
        <View
          style={{
            paddingTop: 30,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              Total Liabilities
            </Text>
          </View>
          <View style={{fkex: 1}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              ₹ 500000
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 30,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              Bills
            </Text>
          </View>
          <View style={{fkex: 1}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              ₹ 7500
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => signOut()} title="Sign out" />
      </View>
    </View>
  );
};

export default Profile;
