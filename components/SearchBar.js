import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10, borderRadius: 1 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Search Bar"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
