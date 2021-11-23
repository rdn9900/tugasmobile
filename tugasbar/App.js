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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setInterval(() => {
      navigation.navigate('Login');
    }, 200.000);
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

const HomeScreen = ({navigation}) => {
  return(
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      {/* Bagian Uang */}
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 10,
          paddingHorizontal: 20,
          backgroundColor: '#FFFFFF',
        }}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>Your Balance</Text>
        <Text style={{fontSize: 32, fontWeight: '500'}}>RP. 1.000.000</Text>
      </View>
      {/* Bagian kotak biru */}
      <View style={{marginHorizontal: 20}}>
        <View style={{marginTop:20 }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('Top Up')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 13,
                  paddingVertical: 13,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                  }}
                  source={require('./images/add_24px.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('QR Payment')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  source={require('./images/QR.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                QR Pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => navigation.navigate('Transfer')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 13,
                  paddingVertical: 13,
                  borderRadius: 7,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 30,
                  }}
                  source={require('./images/arrow_right.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Transfer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bagian kotak banyak */}
        <View style={{marginTop: 37}}>
          <View style={{marginBottom: 9}}>
            <Text>5 Latest Transaction</Text>
          </View>
          <ScrollView style={{height: '63%'}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};


const TransactionHistoryScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        height: '60%',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#E5E5E5',
      }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View style={{height: 224, width: 393, backgroundColor: '#005690'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 50,
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}>
            Raden M Naufal hidayat
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}>
            08124712416
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 30, marginTop: 35}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
            marginBottom: 33,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            CHANGE PROFILE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
            marginBottom: 33,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            CHANGE PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4982C1',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Card = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        padding: 10,
        flexDirection: 'row',
        marginBottom: 15,
      }}>
      <Image
        source={require('./images/left-right-arrow.png')}
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 8,
        }}
      />
      <View style={{justifyContent: 'center', marginHorizontal: 16}}>
        <Text style={{marginBottom: 8, fontWeight: '400'}}>RP. 80.000</Text>
        <Text style={{fontWeight: '400'}}>Transfer to 082240206861</Text>
      </View>
      <Text
        style={{
          marginHorizontal: 16,
          fontWeight: '400',
        }}>
        20/08/2020
      </Text>
    </View>
  );
};


function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={TransactionHistoryScreen}
        options={{
          tabBarLabel: 'Transaksi History',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="arrow-up-down" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="face-profile" color={color} size={size} />
          ),
        }}
      />
 

    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
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
          }}        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#005690'},
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
