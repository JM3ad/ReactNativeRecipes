import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import AppText from 'components/basic/app-text';

const AppSubheader: React.FC<AppHeaderProps> = ({children}) => {
  return <AppText style={styles.defaultSubheaderStyle}>{children}</AppText>;
};

const styles = StyleSheet.create({
  defaultSubheaderStyle: {
    fontSize: 20,
    margin: 15,
  }
});

interface AppHeaderProps {
  children?: ReactNode;
}

export default AppSubheader;