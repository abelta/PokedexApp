import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { pokemonTypeShape } from '../../../../PropTypes/Pokemon';
import { BulletType } from '../.';
import styles from './styles';

const StatsType = ({ data, style }) => (
  <View style={[styles.typesStats, style]}>
    {
      data.map(type => <BulletType key={type.type.name} value={type.type.name} />)
    }
  </View>
);

StatsType.propTypes = {
  data: PropTypes.arrayOf(pokemonTypeShape).isRequired,
  style: PropTypes.number, // eslint-disable-line react/require-default-props
};

export default StatsType;
