import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const Card = ({ data }) => {
    const { title, description, source: { name }, content, author, urlToImage } = data.item;

    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Text style={styles.nameStyle}>{`${name}`}</Text>
                <Text style={styles.authorStyle}>{`Author : ${author}`}</Text>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.descriptionStyle}>{description}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: urlToImage }} resizeMode="cover" style={styles.imageStyle} />
            </View>
            <View style={styles.contenContainer}>
                <Text style={styles.contentStyle}>
                    {content}
                </Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    wrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 10,


    },
    titleContainer: { marginVertical: 20 },
    imageContainer: {
        overflow: 'hidden'
    },
    contenContainer: { marginTop: 20 },
    nameStyle: {},
    authorStyle: {},
    titleStyle: {},
    descriptionStyle: {},
    imageStyle: {
        width: '100%',
        height: 200
    },
    contentStyle: {}

})
export default Card;