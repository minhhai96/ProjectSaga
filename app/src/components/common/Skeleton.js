import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {sizeWidth} from '../../ultils/SizeUltils';
import AppStyles from '../../../res/AppStyles';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={[styles.skeletonContainer]}>
        <View style={[AppStyles.row]}>
          <View style={styles.skeletonAvatar} />
          <View style={styles.skeletonText} />
        </View>
        <View style={styles.skeletonImage} />
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    paddingHorizontal: sizeWidth(20),
    marginTop: sizeWidth(20),
  },
  skeletonAvatar: {
    width: sizeWidth(60),
    height: sizeWidth(60),
    borderRadius: sizeWidth(30),
  },
  skeletonText: {
    width: sizeWidth(260),
    height: sizeWidth(20),
    marginLeft: sizeWidth(10),
    marginTop: sizeWidth(18),
  },
  skeletonImage: {
    width: sizeWidth(335),
    height: sizeWidth(120),
    borderRadius: sizeWidth(5),
    marginTop: sizeWidth(10),
  },
});

export default Skeleton;
