import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { pokemonStatShape } from '../../../../PropTypes/Pokemon';
import { StatColumn } from '../.';
import styles from './styles';

const StatsPanel = ({ data, style }) => (
  <View style={[styles.statsPanel, style]}>
    {
      data.map(stat => (
        <StatColumn key={stat.stat.name} label={stat.stat.name} value={stat.baseStat} />
      ))
    }
  </View>
);

StatsPanel.propTypes = {
  data: PropTypes.arrayOf(pokemonStatShape).isRequired,
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  style: PropTypes.object,
};

export default StatsPanel;
