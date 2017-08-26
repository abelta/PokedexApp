import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { pokemonDetailParams, pokemonType } from '../../PropTypes/Pokemon';
import { getSent as pokemonGetSent } from '../../Actions/Pokemon';

class PokemonDetail extends Component {

  componentWillMount() {
    const { getPokemon, match: { params: { id } } } = this.props;
    getPokemon(id);
  }

  render() {
    const { match, pokemon } = this.props;
    return (
      <View>
        <Text>POKEMON DETAIL</Text>
        <Text>{match.params.id}</Text>
        <Text>NAME</Text>
        <Text>{pokemon.name}</Text>
      </View>
    );
  }
}

PokemonDetail.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  match: pokemonDetailParams.isRequired,
  pokemon: pokemonType.isRequired,
  // pokemon: pokemonType,
};

const mapStateToProps = state => ({
  pokemon: state.pokemonDetail,
});

const mapDispatchToProps = dispatch => ({
  getPokemon: id => dispatch(pokemonGetSent({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
