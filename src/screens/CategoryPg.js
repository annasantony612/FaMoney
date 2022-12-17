import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {useState} from 'react';
import Liability from './Liability';

const CategoryPg = ({navigation}) => {
  var radio_props = [
    {label: '💰Chits', value: 0},
    {label: '💰Installment', value: 1},
    {label: '💰loans ', value: 2},
    {label: '🧾bills', value: 3},
  ];
  const [value, setValue] = useState(0);
  const [value3Index, setvalue3Index] = useState(0);
  let pagename = 'Liability';

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Choose your category</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.categorybox}>
          <RadioForm formHorizontal={false} animation={true}>
            {radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                <View
                  style={{
                    paddingHorizontal: 4,
                    paddingVertical: 15,
                  }}>
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={() => setvalue3Index(i)}
                    labelStyle={{
                      fontSize: 20,
                      color: 'black',
                      textAlign: 'left',
                    }}
                    labelWrapStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'flex-end',
                  }}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={value3Index === i}
                    onPress={() => {
                      // changePgname(i);
                      setvalue3Index(i);
                      i === 3 ? (pagename = 'Bills') : null;
                      navigation.navigate(pagename);
                    }}
                    borderWidth={1}
                    buttonInnerColor={'#02C3BD'}
                    buttonOuterColor={value3Index === i ? '#02C3BD' : '#000'}
                    buttonSize={10}
                    buttonOuterSize={20}
                    buttonStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    buttonWrapStyle={{flex: 1}}
                  />
                </View>
              </RadioButton>
            ))}
          </RadioForm>
        </View>
      </View>
      <View style={styles.container3}></View>
    </View>
  );
};

export default CategoryPg;

const styles = StyleSheet.create({
  container: {flex: 1},
  container1: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  container2: {flex: 3, paddingHorizontal: 30},
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text1: {color: 'black', opacity: 0.8, fontSize: 28, fontWeight: '700'},
  text2: {color: 'black', fontSize: 18, fontWeight: '700', padding: 10},
  text3: {color: 'black', fontSize: 18, fontWeight: '700'},
  text4: {color: 'black', fontSize: 18, fontWeight: '700'},
  text5: {color: 'black', fontSize: 18, fontWeight: '700'},

  categorybox: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});