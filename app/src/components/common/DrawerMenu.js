import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import ItemDrawer from './ItemDrawer';

const DrawerMenu = () => {
  const Item = [
    {
      icon: 'user',
      title: 'User',
      action: null,
    },
  ];

  const renderItemMenu = (item, index) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
