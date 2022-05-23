import {
    StyleSheet
} from 'react-native';

const style = StyleSheet.create({
    card_container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    card_content: {
        marginTop: 10,
    },
    card_title: {
        fontWeight: 'bold',
    },
});

export default style;