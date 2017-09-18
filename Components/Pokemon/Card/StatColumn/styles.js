import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  statColumn: {
    flex: 1,
    flexDirection: 'column',
    height: 120,
    marginLeft: 5,
    marginRight: 5,
  },
  filler: {
    bottom: 20,
    position: 'absolute',
    width: '100%',
  },
  label: {
    backgroundColor: 'lightgrey',
    bottom: 0,
    height: 20,
    fontSize: 12,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
});

export default styles;
