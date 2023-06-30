import React from 'react'
import { Image, StyleSheet, View, Text, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const twitter = <Icon name='twitter' size={30} color="black" />
const instagram = <Icon name='instagram' size={30} color="black" />
const linkedin = <Icon name='linkedin' size={30} color="black" />
const facebook = <Icon name='facebook' size={30} color="black" />

export default function ProfileCard() {

    const user = {
        avatar: "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg?w=740&t=st=1687478336~exp=1687478936~hmac=e9b9dfc516a8ad195be37d0fe743165b3458884be588bf766b38d5f34d3c4e60",
        coverPhoto: "https://previews.123rf.com/images/jevee/jevee1606/jevee160600877/59172742-resumen-elaborado-por-fondo-colorido-fondo-de-pantalla-art%C3%ADstica-en-colores-verde-rosa-con-puntos.jpg",
        name: "Daniela Usamá"
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://twitter.com")}>
                    {twitter}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://instagram.com")}>
                    {instagram}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://linkedin.com")}>
                    {linkedin}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.facebook.com")}>
                    {facebook}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        alignItems: 'center'
    },
    coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white"
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: "60%",
        justifyContent: "space-between"
    }
})