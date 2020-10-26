import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {sizeWidth} from '../../ultils/SizeUltils';

const DrawerMenu = () => {
  const Item = [
    {
      icon: 'user',
      title: 'User',
      action: null,
    },
  ];

  const renderItemMenu = (item, index) => {
    console.log('item', item);
    return (
      <ItemDrawer
        name={item.item.icon}
        title={item.item.title}
        action={item.item.action}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Item}
        renderItem={renderItemMenu}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default DrawerMenu;

const ItemDrawer = ({name, title, action}) => {
  return (
    <TouchableOpacity style={styles.containerItemDrawer} onPress={action}>
      <Icon name={name} size={20} color={'green'} />
      <Text style={styles.textContainer}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerItemDrawer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: sizeWidth(10),
  },
});
