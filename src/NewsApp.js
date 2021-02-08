import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
const apikey = "02ee09a1b06245b2b84c215554f551ac";
const base_url = "https://newsapi.org/v2/top-headlines"
// ?country=us&apiKey=API_KEY
const NewsApp = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${base_url}?country=${'us'}&apiKey=${apikey}`)
            .then((res => res.json()))
            .then(data => setNews(data.articles))
            .catch(err => console.log(err))


    }, []);
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={news}
                renderItem={(ele) => <Card data={ele} />}
                keyExtractor={(el, index) => index}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f8f8f8",
        flex: 1
    }
})

export default NewsApp;