import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bullet: {
    backgroundColor: 'red',
    borderColor: 'black',
    flexDirection: 'row',
    height: 20,
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    paddingLeft: 10,
  },
  value: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    paddingLeft: 10,
  },
});

export default styles;
