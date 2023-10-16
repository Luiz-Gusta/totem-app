import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#004A86',
      height:100,
      padding: 20
    },

    headerFlex: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    weatherContent: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      gap: 10,
      maxWidth: 200
    },

    headerContent: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },

    label: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#002756',
    },

    icon: {
      maxHeight: 60,
      maxWidth: 60
    }

  });
