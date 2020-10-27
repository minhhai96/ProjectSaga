import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sizeWidth} from '../../ultils/SizeUltils';

const ItemDrawer = ({name, title, action}) => {
  return (
    <TouchableOpacity style={styles.containerItemDrawer} onPress={action}>
      <Icon name={name} size={20} color={'green'} />
      <Text style={styles.textContainer}>{title}</Text>
    </TouchableOpacity>
  );
};

ItemDrawer.PropTypes = {
  action: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  containerItemDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: sizeWidth(10),
  },
});

export default ItemDrawer;
