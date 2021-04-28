import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
     <Ionicons name="cart-outline" size={26} />
      <Text style={{ fontSize: 18 }}>Shopping Cart</Text>
      <Text>Empty</Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    flex: 0.3,
    elevation: 2,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};

export default Header;
