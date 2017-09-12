import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  empty: {
    width: 25,
  },
  title: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  search: {
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
    width: 25,
  },
});

export default styles;
