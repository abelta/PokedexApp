import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  input: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0,
    color: 'grey',
    fontSize: 18,
    height: 20,
    lineHeight: 18,
    paddingLeft: 4,
    paddingRight: 4,
    textDecorationLine: 'none',
  },
  clear: {
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default styles;
