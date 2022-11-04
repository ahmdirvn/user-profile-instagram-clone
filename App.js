

//NAMA : AHMAD IRVAN MAULANA 
//KELAS : IK2A
//NIM : 33421003

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          borderBottomWidth: 2,
          borderBottomColor: '#EAEAEA',
        }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold',alignItems:'center',paddingTop:3 }}>
          Ahmad Irvan Maulana
        </Text>
      </View>

      <View
        style={{
          flex: 6,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/profil.jpg')}
          style={{
            height: 60,
            width: 60,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>
        <View Style={{ flexDirection: 'coloumn', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ fontWeight: 'bold', marginHorizontal: 20 }}>
              9999
            </Text>

            <Text style={{ fontWeight: 'bold', marginHorizontal: 20 }}>
              99999
            </Text>

            <Text style={{ fontWeight: 'bold', marginHorizontal: 20 }}>
              9999
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginHorizontal: 18 }}>post</Text>

            <Text style={{ marginLeft: 19 }}>followers</Text>

            <Text style={{ marginLeft: 22}}>following</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 6,
          backgroundColor: 'white',
          flexDirection: 'coloumn',
          marginLeft: 20,
        }}>
        <Text style={{ fontWeight: 'bold' }}>ahmdirvn__</Text>
        <Text style={{ color: 'grey' }}>Jepara</Text>
        <Text style={{ color: 'grey' }}>'Veni Vidi Vici'</Text>
        <Text style={{ color: 'blue' }}>
          www.linkedin.com/in/ahmadirvanmaulana/
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
          borderTopWidth: 2,
          borderTopColor: '#EAEAEA',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/gallery.png')}
          style={{
            height: 29,
            width: 29,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>

        <Image
          source={require('./assets/follower.png')}
          style={{
            height: 29,
            width: 29,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>
      </View>

      <View style={{ flex: 7, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 2,
            marginHorizontal: 5,
          }}></View>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
      </View>

      <View
        style={{
          flex: 7,
          backgroundColor: 'white',
          flexDirection: 'row',
          marginVertical: 5,
        }}>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 2,
            marginHorizontal: 5,
          }}></View>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderBottomColor: '#EAEAEA',
        }}>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 2,
            marginHorizontal: 5,
          }}></View>
        <View style={{ backgroundColor: 'pink', flex: 2 }}></View>
      </View>

      <View style={{ flex: 3, backgroundColor: 'white',flexDirection:'row',alignItems:'center' }}>
        <Image
          source={require('./assets/home.png')}
          style={{
            height: 25,
            width: 25,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>

          <Image
          source={require('./assets/search.png')}
          style={{
            height: 25,
            width: 25,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>

          <Image
          source={require('./assets/add.png')}
          style={{
            height: 25,
            width: 25,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>

          
          <Image
          source={require('./assets/like.png')}
          style={{
            height: 25,
            width: 25,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>

          <Image
          source={require('./assets/user.png')}
          style={{
            height: 25,
            width: 25,
            borderRadius: '50%',
            marginHorizontal: 20,
          }}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;
