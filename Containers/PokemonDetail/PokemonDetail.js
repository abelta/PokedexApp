import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import pokemonShape, { pokemonDetailParams } from '../../PropTypes/Pokemon';
import { getSent as pokemonGetSent } from '../../Actions/Pokemon';
import { selectPokemon } from '../../Selectors/Pokemon';
import { ErrorModal } from '../../Components';
import { Card as PokemonCard } from '../../Components/Pokemon';
import styles from './styles';

class PokemonDetail extends Component {
  componentWillMount() {
    const { getPokemon, match: { params: { id: name } }, pokemon } = this.props;
    if (!pokemon) getPokemon(name);
  }

  render() {
    const { error, loading, pokemon } = this.props;
    return (
      <View style={styles.pokemonDetail}>
        {loading && <ActivityIndicator size="large" />}
        {error && <ErrorModal>{error}</ErrorModal>}
        {pokemon && <PokemonCard pokemon={pokemon} style={styles.card} />}
      </View>
    );
  }
}

PokemonDetail.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  getPokemon: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: pokemonDetailParams.isRequired,
  pokemon: PropTypes.oneOfType([pokemonShape, PropTypes.bool]).isRequired,
};

const mapStateToProps = (state, props) => ({
  error: state.containers.pokemonDetail.error,
  loading: state.containers.pokemonDetail.loading,
  pokemon: selectPokemon(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  getPokemon: name => dispatch(pokemonGetSent({ name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
