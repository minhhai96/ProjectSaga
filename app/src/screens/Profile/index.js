import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../../res';
import ToolBar from '../../components/common/ToolBar';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ToolBar title={'Profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default Profile;
