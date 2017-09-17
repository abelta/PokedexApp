import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 4,
  },
  brief: {
    height: 96,
    flexDirection: 'row',
  },
  briefStats: {
    flex: 1,
    flexDirection: 'column',
    height: 96,
    justifyContent: 'space-between',
  },
  briefBullets: {
    margin: 2,
  },
  briefImages: {
    flex: 1,
  },
  moveSet: {
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
