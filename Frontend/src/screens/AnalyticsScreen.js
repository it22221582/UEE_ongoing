import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the AnalyticsScreen!</Text>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
