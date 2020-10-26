import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name={'id-badge'} size={50} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
