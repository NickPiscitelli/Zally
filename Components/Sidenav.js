import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Collapsible from 'react-native-collapsible';

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
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            
            <View style={styles.container}>
                <View style={styles.collapseHeader}>
                    <TouchableOpacity onPress={() => {this.setState({portfolioCollapsed: !this.state.portfolioCollapsed})}}>
                        <View style={styles.collapseText}><Text>Portfolios</Text></View>
                        <View style={styles.collapseIcon}><Text>Arrow</Text></View>
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
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    navContain:{
        paddingTop: 20,
        backgroundColor: '#222222'
    },
    container: {
      paddingTop: 20,
      flex: 1
    },
    sidenavHeader: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        flex: 1,
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
    navItemStyle: {
      padding: 10
    },
    navSectionStyle: {
      backgroundColor: 'lightgrey'
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
        color: 'white'
    }
  });

export default SideMenu;