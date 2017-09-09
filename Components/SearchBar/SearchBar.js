import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableButton, TouchableLink } from '../../Components';
import { Back as BackIcon, Clear as ClearIcon } from '../../Components/Icons';
import styles from './styles';

class SearchBar extends PureComponent {
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

  onSubmitEditing({event, value, text}) {
    console.log('ON SUBMIT');
    // console.log(event);
    // console.log(value);
    // console.log(text);
  }

  render() {
    const { value } = this.state;
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
        <TouchableButton onPress={this.onClear} style={styles.clear}>
          <ClearIcon />
        </TouchableButton>
      </View>
    );
  }
}

export default SearchBar;
