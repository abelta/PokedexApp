import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { listSent } from '../../Actions/Pokemon';
import { selectPokemonIndex } from '../../Selectors/Pokemon';
import { pokemonEntryType } from '../../PropTypes/Pokemon';
import { ErrorModal } from '../../Components/Layout';
import PokemonListItem from '../../Components/PokemonListItem';

class PokemonList extends Component {
  componentWillMount() {
    const { getList, offset, pokemonIndex } = this.props;
    if (!pokemonIndex || pokemonIndex.length === 0) getList(offset);
  }

  render() {
    const { error, pokemonIndex, loading } = this.props;
    const renderItem = ({ item }) => (<PokemonListItem key={item.name} pokemonEntry={item} />);
    return (
      <View>
        {loading && <ActivityIndicator size="large" />}
        {error && <ErrorModal>{error}</ErrorModal>}
        {pokemonIndex &&
          <FlatList data={pokemonIndex} renderItem={renderItem} keyExtractor={item => item.name} />}
      </View>
    );
  }
}

PokemonList.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  getList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
  pokemonIndex: PropTypes.arrayOf(pokemonEntryType).isRequired,
};

const mapStateToProps = state => ({
  error: state.containers.pokemonList.error,
  loading: state.containers.pokemonList.loading,
  offset: state.containers.pokemonList.offset,
  pokemonIndex: selectPokemonIndex(state, state.containers.pokemonList.offset),
});

const mapDispatchToProps = dispatch => ({
  getList: offset => dispatch(listSent({ offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
