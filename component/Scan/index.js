import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    </View>
  
  );
  
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );
  
  const initialLayout = { width: Dimensions.get('window').width, heigh:Dimensions.get('window').height };
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'QR CODE' },
      { key: 'second', title: 'Card' },
    ]);
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );
  }
  
  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
  