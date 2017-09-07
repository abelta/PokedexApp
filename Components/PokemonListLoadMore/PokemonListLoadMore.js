import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';

const PokemonListLoadMore = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Text>Load more</Text>
  </TouchableHighlight>
);

PokemonListLoadMore.propTypes = {
  onPress: PropTypes.func, // eslint-disable-line react/require-default-props
};

export default PokemonListLoadMore;
