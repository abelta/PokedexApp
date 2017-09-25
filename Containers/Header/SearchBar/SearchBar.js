import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { withRouter } from 'react-router-native';
import { SlideView, TouchableButton, TouchableLink } from '../../../Components';
import { Back as BackIcon, Clear as ClearIcon, Go as GoIcon } from '../../../Components/Icons';
import styles from './styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChangeText = this.onChangeText.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSubmitEditing = this.onSubmitEditing.bind(this);
  }

  onChangeText(value) {
    this.setState({ value: value.toLowerCase() });
  }

  onClear() {
    const value = '';
    this.setState({ value });
  }

  onSubmitEditing() {
    const { history } = this.props;
    const { value } = this.state;
    history.push(`/pokemon/${value}`);
  }

  render() {
    const { value } = this.state;
    const disabledButtons = value.length === 0;
    return (
      <SlideView style={styles.searchBar} toLeft >
        <TouchableLink style={styles.back} to="/" >
          <BackIcon />
        </TouchableLink>
        <TextInput
          autoCorrect={false}
          autoFocus
          multiline={false}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          placeholder="Find Pokémon by name"
          placeholderTextColor="lightgrey"
          returnKeyType="search"
          selectTextOnFocus
          style={styles.input}
          underlineColorAndroid="transparent"
          value={value}
        />
        <TouchableLink
          disabled={disabledButtons}
          style={styles.go}
          to={`/pokemon/${value}`}
        >
          {!disabledButtons && <GoIcon />}
        </TouchableLink>
        <TouchableButton
          disabled={disabledButtons}
          onPress={this.onClear}
          style={styles.clear}
        >
          {!disabledButtons && <ClearIcon />}
        </TouchableButton>
      </SlideView>
    );
  }
}

SearchBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchBar);
