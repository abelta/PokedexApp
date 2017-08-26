import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { pokemonDetailParams, pokemonType } from '../../PropTypes/Pokemon';
import { getSent as pokemonGetSent } from '../../Actions/Pokemon';
import { Error } from '../../Components/Layout';
import PokemonCard from '../../Components/PokemonCard';

class PokemonDetail extends Component {

  componentWillMount() {
    const { getPokemon, match: { params: { id } } } = this.props;
    getPokemon(id);
  }

  render() {
    const { error, loading, pokemon } = this.props;
    return (
      <View>
        <Text>POKEMON DETAIL</Text>
        {loading && <ActivityIndicator size="large" />}
        {error && <Error>{error}</Error>}
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </View>
    );
  }
}

PokemonDetail.propTypes = {
  error: PropTypes.oneOf([PropTypes.string, PropTypes.bool]).isRequired,
  getPokemon: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: pokemonDetailParams.isRequired,
  pokemon: PropTypes.oneOf([pokemonType, PropTypes.bool]).isRequired,
};

const mapStateToProps = state => ({
  error: state.containers.pokemonDetail.error,
  loading: state.containers.pokemonDetail.loading,
});

const mapDispatchToProps = dispatch => ({
  getPokemon: id => dispatch(pokemonGetSent({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
