import { StyleSheet } from 'react-native';

export default StyleSheet.create(
  
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    background: {
      zIndex: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },

    splitView:{
      flex: 1,
      flexDirection: 'row',
      padding: 50,
    },

    leftContainer:{
      flex: 1.5,
    },

    content:{
     flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    buttons:{
      height: 100,
      flexDirection: 'row',
      gap: 40,
    },

    rightContainer:{
      flex: 1,
      flexDirection: 'column',
      alignContent: 'space-around',

    },

    title: {
      //fontFamily: 'BebasNeue',
      fontSize: 50,
      fontWeight: 'bold',
      color: '#002756'
    },

    infoView: {
      flex: 0.2,
      marginHorizontal: 80
  },

  info:{
      fontSize: 24,
      textAlign: 'center',
      color: "#707070"
  },

  modalBackground:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },

  modalContainer:{
    backgroundColor: 'white',
    height: 500,
    width: 528,
    borderRadius: 20,
  },

  modalButtons:{
    flex: 3,
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }

  });
