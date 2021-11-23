import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setInterval(() => {
      navigation.navigate('Login');
    }, 1500);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#005690',
        paddingTop: 100,
      }}
      onPress={() => navigation.navigate('Home')}>
      <Image
        source={require('./images/pngaaa2.png')}
        style={{width: 174.91, height: 150}}
      />
      <Text style={{color: '#FFFFFF', fontSize: 36, marginTop: 80}}>
        e-wallet apps
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 36,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Final Project React Native
      </Text>
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 200,
            backgroundColor: '#005690',
            height: 120,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 69,
          }}>
          <Image source={require('./images/pngaaa2.png')} />
        </View>
        <Text style={{fontSize: 26, marginTop: 20, fontWeight: '500'}}>
          e-wallet
        </Text>
      </View>
      <View style={{marginTop: 23, marginHorizontal: 30}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Email"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Password"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          // onPress={() => navigation.navigate('')}
          style={{backgroundColor: '#4982C1'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registrasi')}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Registrasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RegistrasiScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 150, marginHorizontal: 30}}>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Email"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Password"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="Name"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 23,
            paddingLeft: 20,
          }}
          placeholder="No. Handphone"
          onChangeText={Text => setText(Text)}
          defaultValue={Text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{backgroundColor: '#4982C1', borderRadius: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registrasi">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registrasi"
          component={RegistrasiScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
