import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {sizeFont, sizeHeight} from '../src/ultils/SizeUltils';

const AppStyles = StyleSheet.create({
  colorWhite: {
    color: Colors.white,
  },
  colorBlueViolet: {
    color: Colors.blueViolet,
  },
  size18: {
    fontSize: sizeFont(18),
  },
  marginTop25: {
    marginTop: sizeHeight(25),
  },
});

export default AppStyles;
