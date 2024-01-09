import React from 'react';
import { View, Text, Image, Button, Linking, ScrollView,TouchableOpacity } from 'react-native';

const Profilku = () => {
  const url = 'https://www.instagram.com/fahriazr9/';
  Linking.openURL(url);
};

const Portosatu = () => {
  const url = 'https://www.figma.com/file/rJ63t59SmmxuHlLUs2uFYg/Project-Mixue?type=design&mode=design&t=hR1LwWLfnCInYsiT-0';
  Linking.openURL(url);
};

const Portodua = () => {
  const url = 'https://www.figma.com/file/PZCj6onP0Mi4mAfR09mw4D/Design-Kaos-KK5?type=design&mode=design&t=hR1LwWLfnCInYsiT-0';
  Linking.openURL(url);
};

const Portotiga = () => {
  const url = 'https://www.figma.com/file/W4wQuPyQtyfhPmhb2HgAIY/Ridesain-Kemasan?type=design&mode=design&t=hR1LwWLfnCInYsiT-0';
  Linking.openURL(url);
};

const LatihanPertama = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'red', marginTop: 50, marginBottom: 20,fontFamily: 'Poppins'}}>My Portfolio</Text>
        <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
          <Image style={{ width: 200, height: 200, borderRadius: 100,borderWidth:2 }} source={require('./assets/profil.png')} />
                  <Text style={{ fontSize: 30, fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center', color: 'red', marginTop: 20, marginBottom: 20 }}>Farizqy Akhram N</Text>
          <Text style={{ fontSize: 15, fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center', color: 'black', marginTop: 30, marginBottom: 5}}>I am a student of SMK Telkom Purwokerto majoring in Software Engineering.</Text>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
          <Button title='Instagram' color='red' onPress={Profilku} />
          <Text style={{ fontSize: 30, fontFamily: 'Poppins', textAlign: 'center', color: 'red', marginTop: 80 }}>My Portfolio</Text>
          <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
            <Image style={{ width: 200, height: 200, borderRadius: 25, marginTop: 20,borderWidth:2 }} source={require('./assets/porto1.jpg')} />
            <Text style={{ fontSize: 15, fontFamily: 'Poppins', textAlign: 'center', color: 'black', marginTop: 10, marginBottom: 30 }}>Landing Page for Practitioner CTC Center.</Text>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
              <Button title='Portosatu' color='red' onPress={Portosatu} />
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
            <Image style={{ width: 200, height: 200, borderRadius: 25, marginTop: 20,borderWidth:2 }} source={require('./assets/porto2.jpg')} />
            <Text style={{ fontSize: 15, fontFamily: 'Poppins', textAlign: 'center', color: 'black', marginTop: 10, marginBottom: 30 }}>Web Design for Fashion Store.</Text>
            </View>
              <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
              <Button title='Portodua' color='red' onPress={Portodua} />
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
            <Image style={{ width: 200, height: 200, borderRadius: 25, marginTop: 20,borderWidth:2 }} source={require('./assets/porto3.jpg')} />
            <Text style={{ fontSize: 15, fontFamily: 'Poppins', textAlign: 'center', color: 'black', marginTop: 10, marginBottom: 30 }}>Design Cover Book for CTC Center.</Text>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
              <Button title='Portotiga' color='red' onPress={Portotiga} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LatihanPertama;