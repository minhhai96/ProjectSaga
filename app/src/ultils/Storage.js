import AsyncStorage from '@react-native-community/async-storage';

const KEY_TOKEN = 'access_token';

export const saveToken = (token) => AsyncStorage.setItem(KEY_TOKEN, token);

export const getToken = () => {
  return AsyncStorage.getItem(KEY_TOKEN);
};

export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);
