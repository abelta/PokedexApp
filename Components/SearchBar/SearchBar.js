import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableButton, TouchableLink } from '../../Components';
import { Back as BackIcon, Clear as ClearIcon, Go as GoIcon } from '../../Components/Icons';
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
    this.setState({ value });
  }

  onClear() {
    const value = '';
    this.setState({ value });
  }

  onSubmitEditing() {
  }

  render() {
    const { value } = this.state;
    const disabledButtons = value.length === 0;
    return (
      <View style={styles.searchBar}>
        <TouchableLink style={styles.back} to="/" >
          <BackIcon />
        </TouchableLink>
        <TextInput
          autoCorrect={false}
          autoFocus
          multiline={false}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          placeholder="Find Pokèmon by name"
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
          to="/"
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
      </View>
    );
  }
}

export default SearchBar;
