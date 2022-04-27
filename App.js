import {View} from 'react-native';
import React from 'react';
import Control from './screen/control.js';
import {ScaledSheet} from 'react-native-size-matters';

const App = () => {
  return (
    <View style={styles.container}>
      <Control />
    </View>
  );
};

export default App;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  },
});
