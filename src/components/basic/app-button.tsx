import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from 'components/basic/app-text';

const AppButton: React.FC<AppTextProps> = ({children, onPress}) => (
  <TouchableOpacity style={[styles.defaultButtonStyle]} onPress={onPress}>
    <AppText style={styles.buttonTextStyle}>{children}</AppText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  defaultButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#3322DD',
    padding: 10,
    margin: 20
  },
  buttonTextStyle: {
    color: '#FFFFFF',
  }
});

interface AppTextProps {
  children?: ReactNode;
  onPress?: () => void;
}

export default AppButton;