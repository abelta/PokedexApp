import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { pokemonMoveShape } from '../../../../PropTypes/Pokemon';
import styles from './styles';

const MoveSet = ({ data, style }) => (
  <View style={[styles.moveSet, style]}>
    <Text style={styles.title}>Moves</Text>
    <ScrollView style={styles.list}>
      {
        data.map(move => (
          <Text key={move.move.name} style={styles.move}>{move.move.name}</Text>
        ))
      }
    </ScrollView>
  </View>
);

MoveSet.propTypes = {
  data: PropTypes.arrayOf(pokemonMoveShape).isRequired,
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  style: PropTypes.number,
};

export default MoveSet;
