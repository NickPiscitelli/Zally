import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class SideMenu extends Component {

  constructor(props){
      super(props);
  }

  state = {
      portfolioCollapsed: true 
  };

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <SafeAreaView style={styles.navContain}>
        <View style={styles.sidenavHeader}>
          <Text style={styles.headerText}>Menu</Text>
          <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('DrawerClose')}}>
            <EvilIcon name="close" size={32} color={'white'} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View>
            
            <View style={styles.navSectionStyle}>
                <View style={styles.collapseHeader}>
                    <TouchableOpacity style={styles.collapseHeader} onPress={() => {this.setState({portfolioCollapsed: !this.state.portfolioCollapsed})}}>
                        <Text style={styles.navItemStyle}>Portfolios</Text>
                        <Icon style={{fontWeight: 'normal'}} name="plus" size={24} color={'white'} />
                    </TouchableOpacity>
                </View>
                <Collapsible collapsed={this.state.portfolioCollapsed}>
                    <View><Text>Portfolio 1</Text></View>
                    <View><Text>Portfolio 1</Text></View>
                    <View><Text>Portfolio 1</Text></View>
                    <View><Text>Portfolio 1</Text></View>
                </Collapsible>
            </View>

          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                Settings
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    navContain:{
        paddingTop: 20,
        backgroundColor: '#222222',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    container: {
      paddingTop: 20,
      flex: 1
    },
    sidenavHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        height: 50,
        flexDirection: 'row',
        padding: 7
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        paddingLeft: 7,
        paddingTop: 7,
        paddingBottom: 7
    },
    scrollContainer: {
        alignSelf: 'stretch',
        flex: 1,
    },
    navItemStyle: {
      padding: 10,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    navSectionStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        flex: 1
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    },
    collapseHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    collapseText: {
        paddingLeft: 7
    },
    collapseIcon: {
        paddingRight: 7
    },
    close: {
        color: 'white',
        backgroundColor: 'white'
    }
  });

export default SideMenu;