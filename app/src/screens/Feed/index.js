import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToolBar from '../../components/common/ToolBar';
import BackIcon from '../../components/common/BackIcon';
import * as RootNavigation from '../../router/RootNavigation';

const Feed = () => {
  return (
    <View style={styles.container}>
      <ToolBar
        LeftComponent={
          <BackIcon
            iconName={'menu'}
            onPress={() => RootNavigation.toggleDrawer()}
          />
        }
        center={'Feed'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Feed;
