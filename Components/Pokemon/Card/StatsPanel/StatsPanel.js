import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { pokemonStatShape } from '../../../../PropTypes/Pokemon';
import { StatColumn } from '../.';
import styles from './styles';

const StatsPanel = ({ data }) => (
  <View style={styles.statsPanel}>
    {
      data.map(stat => (
        <StatColumn key={stat.stat.name} label={stat.stat.name} value={stat.baseStat} />
      ))
    }
  </View>
);

StatsPanel.propTypes = {
  data: PropTypes.arrayOf(pokemonStatShape).isRequired,
};

export default StatsPanel;
