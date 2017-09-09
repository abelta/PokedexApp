import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableButton, TouchableLink } from '../../Components';
import { Back as BackIcon, Clear as ClearIcon } from '../../Components/Icons';
import styles from './styles';

class SearchBar extends PureComponent {
  render() {
    return (
      <View style={styles.searchBar}>
        <TouchableLink style={styles.back} to="/" ><BackIcon /></TouchableLink>
        <TextInput
          autoCorrect={false}
          autoFocus
          multiline={false}
          placeholder="Find Pokèmon by name"
          placeholderTextColor="lightgrey"
          returnKeyType="search"
          selectTextOnFocus
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <TouchableButton
          onPress={() => { console.warn('PRESS') }}
          style={styles.clear}
        >
          <ClearIcon />
        </TouchableButton>
      </View>
    );
  }
}

export default SearchBar;
