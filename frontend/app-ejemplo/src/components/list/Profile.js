import React from "react";
import { View, StyleSheet, Image, Linking, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const instagram_username = <Icon name="instagram" size={30} color="black" />
const portfolio_url = <Icon name="globe" size={30} color="black" />

const Profile = ({ task, closeProfile }) => {
    return (
        <View style={styles.item}>
            <View style={styles.supimage}>
                <View style={styles.leftSide}>
                    <Image style={styles.image} source={{ uri: task.urls.raw }} />
                </View>
                <View style={styles.rightside}>
                    <Text style={{ color: "blue" }} onPress={() => {
                        Linking.openURL(task.user.portfolio_url)
                    }}>
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{ color: "blue" }} onPress={() => {
                            Linking.openURL(task.user.social.instagram_username);
                        }}>
                            {instagram_username}
                        </Text>
                        <Text style={{ color: "blue" }} onPress={() => {
                            Linking.openURL(task.user.portfolio_url);
                        }}>
                            {portfolio_url}
                        </Text>
                    </View>
                </View>           
            </View>
            <View style={styles.containerkpi}>
                <View style={styles.kpiR}>
                    <Image style={styles.image2} source={require('../../../assets/like.png')} />
                </View>
            </View>
            <View style={styles.close}>
                <TouchableOpacity onPress={closeProfile}>
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, supimage: {
        width: "100%",
        height: "100%",
        flexBasis: "70%",
        display: "flex",
        flexDirection: "row"
    }, leftSide: {
        flexBasis: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }, rightside: {
        flexBasis: "50%",
        display: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }, redes: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    }, containerkpi: {
        width: "100",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }, kpiR: {
        width: 20
    }, image2: {
        marginLeft:-80,
        marginTop:-55,
        width: 28,
        height: 28
    }, close:{
        marginTop:70, 
        textAlign:"center"
    }
})

export default Profile;