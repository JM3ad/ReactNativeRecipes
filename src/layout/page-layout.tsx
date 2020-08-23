import {ScrollView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

const PageLayout: React.FC<PageLayoutProps> = ({children, style}) => {
  return <View style={[style, styles.container]}>
    <ScrollView>
      {children}
    </ScrollView>
  </View>;
};

interface PageLayoutProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PageLayout;