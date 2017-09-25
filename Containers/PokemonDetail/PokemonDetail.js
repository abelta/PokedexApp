import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import pokemonShape, { pokemonDetailParams } from '../../PropTypes/Pokemon';
import { reset } from '../../Actions/Containers/PokemonDetail';
import { getSent as pokemonGetSent } from '../../Actions/Pokemon';
import { selectPokemon } from '../../Selectors/Pokemon';
import { ActivityIndicator, ErrorView, SlideView } from '../../Components';
import { Card as PokemonCard } from '../../Components/Pokemon';
import styles from './styles';

class PokemonDetail extends Component {
  componentWillMount() {
    const { getPokemon, match: { params: { id: name } }, pokemon, resetContainer } = this.props;
    resetContainer();
    if (!pokemon) getPokemon(name);
  }

  render() {
    const { error, loading, pokemon } = this.props;
    return (
      <View style={styles.pokemonDetail}>
        {loading && <ActivityIndicator />}
        {error && <ErrorView>{error}</ErrorView>}
        {
          pokemon &&
          <SlideView style={{ flex: 1 }} toLeft>
            <PokemonCard pokemon={pokemon} style={styles.card} />
          </SlideView>
        }
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
  resetContainer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  error: state.containers.pokemonDetail.error,
  loading: state.containers.pokemonDetail.loading,
  pokemon: selectPokemon(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  getPokemon: name => dispatch(pokemonGetSent({ name })),
  resetContainer: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
