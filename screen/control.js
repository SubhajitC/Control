import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Card, Button} from 'react-native-paper';
import Iconins from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const control = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Iconins
            name="chevron-left"
            style={styles.backarrow}
            color="#000000"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Iconins
            name="menu"
            style={styles.backarrow}
            color="#000000"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View>
          <Text>Shade Control</Text>
          <Text>living control</Text>
          <Text></Text>
        </View>
        <Text>SCENES</Text>
        <View style={styles.txt}>
          <Text>
          <Iconins
            name="rocket"
            style={styles.backarrow}
            color="#990000"
            onPress={() => {
              navigation.goBack();
            }}
          />
          ALL Off</Text>
        </View>
        <View style={styles.txt}>
          <Text>
          <Iconins
          name="rocket"
          style={styles.backarrow}
          color="#990000"
          onPress={() => {
            navigation.goBack();
          }}
        />
          ALL Off</Text>
        </View>
        <View style={styles.txt}>
          <Text>
          <Iconins
          name="rocket"
          style={styles.backarrow}
          color="#990000"
          onPress={() => {
            navigation.goBack();
          }}
        />
          Bright</Text>
        </View>
        <View style={styles.txt}>
          <Text>
          <Iconins
          name="rocket"
          style={styles.backarrow}
          color="#990000"
          onPress={() => {
            navigation.goBack();
          }}
        />
          Bright</Text>
        </View>
        <Text>GROUP CONTROLS</Text>
        <View>
          <View style={styles.txt}>
            <Text>More Open</Text>
          </View>
          <View style={styles.txt}>
            <Text>More close</Text>
          </View>
        </View>
        <Text>CONTROLS</Text>
        <View style={styles.txt}>
          <Text>
          <Icon
          name="rightcircle"
          style={styles.backarrow}
          color="#dcdcdc"
          onPress={() => {
            navigation.goBack();
          }}
        />
          Windows Roller Blind OFF</Text>
        </View>
        <View>
          <View style={styles.txt}>
            <Text>Open</Text>
          </View>
          <View style={styles.txt}>
            <Text>Pause</Text>
          </View>
          <View style={styles.txt}>
            <Text>Close</Text>
          </View>
        </View>
        <View>
          <View style={styles.txt}>
            <Text>Blackout</Text>
          </View>
          <View style={styles.txt}>
            <Text>Flip+</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default control;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  txt: {
    height: '55@s',
    width: width,
    backgroundColor: '#FFF',
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
});
