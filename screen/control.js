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
      <View>
        <View>
          <Iconins name="chevron-left" color="#686868" size={33} />
          <Iconins
            name="menu"
            style={{left: 325, position: 'absolute', top: -1}}
            color="#686868"
            size={33}
          />
        </View>
        <View>
          <Text style={styles.textone}>Shade Control</Text>
          <Text style={styles.texttwo}>Living control</Text>
          <Text></Text>
        </View>
        <Text style={styles.groupcontrols}>SCENES</Text>
        <View style={styles.txt}>
          <Text style={styles.all}>
            <Iconins
              name="rocket"
              style={styles.backarrow}
              color="#990000"
              size={22}
              left={44}
            />
            ALL Off
          </Text>
        </View>
        <View style={styles.txt}>
          <Text style={styles.all}>
            <Iconins
              name="rocket"
              style={{left: 295, position: 'absolute', top: 129}}
              color="#990000"
              size={25}
            />
            ALL Off
          </Text>
        </View>
        <View style={styles.bright}>
          <Text style={styles.all}>
            <Iconins
              name="rocket"
              style={styles.backarrow}
              color="#990000"
              size={22}
              left={44}
            />
            Bright
          </Text>
        </View>
        <View style={styles.bright}>
          <Text style={styles.all}>
            <Iconins
              name="rocket"
              style={{left: 295, position: 'absolute', top: 129}}
              color="#990000"
              size={25}
            />
            Bright
          </Text>
        </View>
        <View style={styles.topview}>
          <Text style={styles.groupcontrols}>GROUP CONTROLS</Text>
          <View style={styles.txt}>
            <Text style={styles.all}>More Open</Text>
          </View>
          <View style={styles.brightone}>
            <Text style={styles.all}>More Close</Text>
          </View>
        </View>
        <Text style={styles.controls}>CONTROLS</Text>
        <View>
          <Text style={styles.More}>
            <Icon name="rightcircle" color="#686868" size={25} />
            Window Roller Blind OFF
          </Text>
        </View>
        <View style={styles.Open}>
          <Text style={styles.all}>Open</Text>
        </View>
        <View style={styles.Pause}>
          <Text style={styles.all}>Pause</Text>
        </View>
        <View style={styles.Close}>
          <Text style={styles.all}>Close</Text>
        </View>
        <View style={styles.blackout}>
        <Text style={styles.all}>Blackout</Text>
      </View>
      <View style={styles.flip}>
        <Text style={styles.all}>Flip+</Text>
      </View>
      </View>
    </ScrollView>
  );
};

export default control;

const styles = ScaledSheet.create({
  Open:{
    height: '55@s',
    width: '96@s',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '-122@s',
    top:'-54@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  blackout:{
    height: '55@s',
    width: '156@s',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '-122@s',
    top:'-177@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  flip:{
    height: '55@s',
    width: '155@s',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '50@s',
    top:'-243@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  Pause:{
    height: '55@s',
    width: '96@s',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '-6@s',
    top:'-118@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  Close:{
    height: '55@s',
    width: '96@s',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '109@s',
    top:'-183@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  txt: {
    height: '55@s',
    width: width / 1.9,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    left: '-163@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
  },
  topview: {
    marginTop: '-127@s',
  },
  baseview: {
    marginTop: '-63@s',
  },
  bright: {
    height: '55@s',
    width: width / 1.9,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    right: '-27@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
    top: '-131@s',
  },
  More: {
    height: '55@s',
    width: width / 1.15,
    backgroundColor: '#FFF',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    right: '122@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
    top: '-58@s',
  },
  brightone: {
    height: '55@s',
    width: width / 1.9,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: '5@s',
    marginLeft: '133@s',
    paddingLeft: '11@s',
    right: '-27@s',
    alignItems: 'center',
    fontFamily: 'Sans-serif',
    top: '-65@s',
  },
  pag: {
    fontSize: '15@s',
  },
  textone: {
    fontFamily: 'normal',
    fontSize: '20@s',
    fontWeight: 'bold',
    color: '#404040',
  },
  textone: {
    fontSize: '17@s',
    fontWeight: 'bold',
    color: '#404040',
  },
  texttwo: {
    fontFamily: 'notoserif',
    fontSize: '13@s',
    color: '#686868',
  },
  groupcontrols: {
    fontFamily: 'notoserif',
    fontSize: '15@s',
    color: '#686868',
    fontWeight: 'bold',
  },
  controls: {
    fontFamily: 'notoserif',
    fontSize: '15@s',
    color: '#686868',
    fontWeight: 'bold',
    top: '-63@s',
  },
  all: {
    alignItems: 'center',
    top: '19@s',
  },
});
