import React from 'react';
import { View, Image, Text } from 'react-native';

const ImageComponent = ({ sourceUrl, name, width }) => {
    return (
        <View style={{ width: width, height: width + 10, margin: 5, marginBottom: 10 }}>
            <Image
                style={{ width: width - 5, height: width - 5 }}
                source={{ uri: sourceUrl }}
            />
            <Text ellipsizeMode="tail" numberOfLines={1}>{name}</Text>
        </View>);
}

export default ImageComponent;