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
          Shaji A C
        </Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: '700',
            paddingLeft: 20,
          }}>
          shaji@gmail.com
        </Text>
      </View>
      <View style={{flex: 2}}></View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => signOut()} title="Sign out" />
      </View>
    </View>
  );
};

export default Profile;
