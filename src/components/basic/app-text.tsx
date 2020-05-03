import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';

const AppText: React.FC<AppTextProps> = ({children, style}) => {
  console.log(style);
  return <Text style={[style, styles.defaultTextStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Merriweather',
    textAlign: 'center'
  },
  alternative: {
    fontFamily: 'Open Sans',
  }
});

interface AppTextProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
}

export default AppText;