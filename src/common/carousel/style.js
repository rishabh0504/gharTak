import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    statsHead: {
        paddingTop: 10,
        paddingHorizontal: 12,
    },
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#fcfcfc',
        shadowOpacity: 1,
        marginTop: windowHeight * 1 / 100,
        shadowOffset: {
            width: 0,
            height: 5
        },
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    bullets: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 5,
        color: 'red'
    },
    bullet: {
        paddingHorizontal: 5,
        fontSize: 20,
    }
});

export default styles;