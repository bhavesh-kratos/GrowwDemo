import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Right } from 'native-base';

export default class SearchBarExample extends Component {

    render() {
        return (
            <Header searchBar rounded>
                <Item style={{ flex: 3 }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search for Image" onChangeText={this.props.changeUserText}
                        onEndEditing={this.props.searchResult}
                        value={this.props.text} />
                </Item>
                <Right>
                    <Button onPress={this.props.searchResult} >
                        <Icon name="ios-search" />
                    </Button>
                </Right>
            </Header>
        );
    }
}