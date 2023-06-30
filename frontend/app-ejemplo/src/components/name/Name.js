import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Name = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [view, setView] = useState(false);

    const toggleView = () => {
        setView(!view);
    };

    const onClear = () => {
        setNombre("");
        setApellido("");
        setView(false);
    };

    return (
        <View>
            <TextInput style={styles.name}
                placeholder="Ingresar nombre"
                value={nombre}
                onChangeText={(text) => setNombre(text)} />
            <TextInput style={styles.name}
                placeholder="Ingresar apellido"
                value={apellido}
                onChangeText={(text) => setApellido(text)} />
            <TouchableOpacity
                style={styles.button}
                onPress={toggleView}
            >
                <Text style={styles.textButton}>Aceptar</Text>
            </TouchableOpacity>
            {view && (
                <View>
                    <Text style={styles.text}>{"Hola " + nombre + " " + apellido + " "}</Text>
                </View>
            )}
            <View>
                <TouchableOpacity
                    style={styles.clear}
                    onPress={onClear}
                >
                    <Text style={styles.textButton}>Limpiar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        color: "black",
        fontSize: 20,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        fontWeight: '400',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "black",
    }, button: {
        borderWidth: 1,
        borderColor: '#DE5F65',
        backgroundColor: '#DE5F65',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
    }, textButton: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }, text: {
        color: "black",
        fontSize: 18,
        marginTop: 20,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'center'
    }, clear: {
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'blue',
        padding: 10,
        marginLeft: 400,
        marginRight: 400,
        marginTop: 20,
        borderRadius: 7
    }
})

export default Name;