import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

function Header(props) {
    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.safe}>
                <Text>Este es el header</Text>
                <Image 
                    source={require('../../../assets/1793FilmMaker.png')}
                    style={styles.logo}
                    />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        padding: 10,
        textAlign: 'center',

    },
    safe: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flexDirection: 'column',

    },
    logo: {
        width: 50,
        height: 50,
    }
})

export default Header;