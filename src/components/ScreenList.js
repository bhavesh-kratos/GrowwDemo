import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, StyleSheet, Text, FlatList, Image, Dimensions } from 'react-native';
import { Container } from 'native-base';
import SearchBar from './SearchBar';
import ImageComponent from './ImageComponent';
import { searchImages, clearData } from '../actions/routines';
import { getFlattenedImageList } from '../selectors/images';

const SCREEN_WIDTH = Dimensions.get('window').width;


class ScreenList extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', columns: 3 };
        this.searchResult = this.searchResult.bind(this);
        this.changeUserText = this.changeUserText.bind(this);
        this.fetchImages = this.fetchImages.bind(this);
        // this.fetchMoreImages = this.fetchMoreImages.bind(this);
    }

    changeUserText(text) {
        this.setState({ text });
    }

    searchResult(){
        this.props.clearData();
        this.fetchImages();
    }

    fetchImages() {
        let pageCount = 1;
        if (this.props.lastPageCount != null) {
            pageCount = this.props.lastPageCount + 1
        }
        search = { result: this.state.text, page: pageCount };
        this.props.searchImages(search);
    }

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        const { columns } = this.state;
        return (
            <Container style={styles.container}>
                <SearchBar text={this.state.text} changeUserText={this.changeUserText} screenWidth={SCREEN_WIDTH} searchResult={this.searchResult} />
                {this.props.imagePages != null && (<FlatList
                    numColumns={3}
                    data={this.props.imagePages}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <ImageComponent name={item.description} width={(SCREEN_WIDTH - 10 * columns) / columns} sourceUrl={item.assets.large_thumb.url} />}
                    onEndReached={this.fetchImages}
                    onEndReachedThreshold={0.87}
                />)}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        imagePages: getFlattenedImageList(state),
        lastPageCount: state.images.last_page_count,
        fetching: state.images.loading,
        error: state.images.error
    };
}

export default connect(mapStateToProps, { searchImages, clearData })(ScreenList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },

});




