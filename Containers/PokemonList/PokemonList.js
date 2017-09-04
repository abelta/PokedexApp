import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, View } from 'react-native';
import * as constants from '../../Constants';
import { listSent } from '../../Actions/Pokemon';
import { selectPokemonIndex } from '../../Selectors/Pokemon';
import { pokemonEntryType } from '../../PropTypes/Pokemon';
import { ErrorModal } from '../../Components/Layout';
import PokemonListEmpty from '../../Components/PokemonListEmpty';
import PokemonListItem from '../../Components/PokemonListItem';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.onEndReached = this.onEndReached.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentWillMount() {
    const { getList, offset, pokemonIndex } = this.props;
    if (!pokemonIndex || pokemonIndex.length === 0) getList(offset);
  }

  onEndReached() {
    console.warn('ON END REACHED');
  }

  onRefresh() {
    console.warn('ON REFRESH');
    const { getList, offset } = this.props;
    getList(offset + constants.POKEMON_LIST_BASE_OFFSET);
  }

  render() {
    const { error, offset, pokemonIndex, loading } = this.props;
    const renderItem = ({ item }) => (<PokemonListItem key={item.name} pokemonEntry={item} />);
    return (
      <View>
        {error && <ErrorModal>{error}</ErrorModal>}
        <FlatList
          data={pokemonIndex}
          extraData={offset}
          // inverted
          renderItem={renderItem}
          keyExtractor={item => item.name}
          refreshing={loading}
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached}
          onRefresh={this.onRefresh}
          ListEmptyComponent={<ActivityIndicator />}
        />
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
