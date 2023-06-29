import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

interface SplashScreenProps {
  navigation: any; // Replace with the appropriate type for navigation prop
}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: width,
    height: height,
  },
});

export default SplashScreen;
