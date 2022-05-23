import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import style from './style.js';

const Card = ({ titulo, children }) => {

    return (
        <>
        <View style={style.card_container}>
            <View style={style.card}>
                <View style={style.card_header}>
                    <Text style={style.card_title}>{titulo}</Text>
                </View>
                <View style={style.card_content}>
                    {children}
                </View>
            </View>
        </View>
        </>
    )
};

export default Card;