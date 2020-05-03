import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import AppText from 'components/basic/app-text';

const AppHeader: React.FC<AppHeaderProps> = ({children}) => {
  return <AppText style={styles.defaultHeaderStyle}>{children}</AppText>;
};

const styles = StyleSheet.create({
  defaultHeaderStyle: {
    fontSize: 30,
    margin: 35,
  }
});

interface AppHeaderProps {
  children?: ReactNode;
}

export default AppHeader;