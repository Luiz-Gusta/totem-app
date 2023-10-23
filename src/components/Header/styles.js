import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
  safeArea: {
    flex: 1,
  },
  
    container: {
      backgroundColor: '#004A86',
      height: 100,
      paddingHorizontal: 20,
      paddingVertical: 16
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
