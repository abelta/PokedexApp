import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import * as constants from '../../Constants';
import { listSent } from '../../Actions/Pokemon';
import { selectPokemonIndex } from '../../Selectors/Pokemon';
import { pokemonEntryShape } from '../../PropTypes/Pokemon';
import ErrorModal from '../../Components/ErrorModal';
import { ActivityIndicator } from '../../Components';
import { Empty } from '../../Components/List';
import { ListItem } from '../../Components/Pokemon';
import styles from './styles';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentWillMount() {
    const { getList, offset, pokemonIndex } = this.props;
    if (!pokemonIndex || pokemonIndex.length === 0) getList(offset);
  }

  onEndReached() {
    const { getList, offset } = this.props;
    getList(offset + constants.POKEMON_LIST_BASE_OFFSET);
  }

  render() {
    const { error, offset, pokemonIndex, loading } = this.props;
    const renderItem = ({ item }) => (<ListItem key={item.name} pokemonEntry={item} />);
    return (
      <View style={styles.pokemonList}>
        {loading && <ActivityIndicator />}
        {error && <ErrorModal>{error}</ErrorModal>}
        <FlatList
          data={pokemonIndex}
          extraData={{ offset }}
          keyExtractor={item => item.name}
          ListEmptyComponent={<Empty />}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
          refreshing={loading}
          renderItem={renderItem}
          style={styles.list}
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
  pokemonIndex: PropTypes.arrayOf(pokemonEntryShape).isRequired,
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
