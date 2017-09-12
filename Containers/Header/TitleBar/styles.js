import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
  },
  search: {
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default styles;
