import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {LeftArrow} from '../../assets/Icons';
const Header = ({children}) => {
  return (
    <View>
      <SafeAreaView style={styles.HeaderContainer}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#02C3BD',
    paddingVertical: 22,
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
