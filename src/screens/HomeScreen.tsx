import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeCard from '../components/HomeCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
});
