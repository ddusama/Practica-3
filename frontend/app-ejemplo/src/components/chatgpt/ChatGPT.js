import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { OpenAIApi, Configuration } from 'openai'

const conf = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(conf)

const ChatGPT = () => {
    const [data, setData] = useState([]);
    const [prompt, setPrompt] = useState('')

    const message = async () => {
        try {
            const completion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: prompt,
                temperature: 0.1,
                max_tokens: 150
            },
            )
            console.log(completion)
            const result = completion.data.choices[0].text;
            setData([...data, { type: 'user', text: prompt }, { type: 'bot', text: result }]);
            setPrompt('');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, puedes preguntarme cualquier duda!</Text>
            <FlatList
                data={data}
                keyExtractor={(index) => index.toString()}
                style={styles.body}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? '#DE5F65' : '#1635BE' }}>
                            {item.type === 'user' ? 'User: ' : 'Chat: '}
                        </Text>
                        <Text >{item.text}</Text>
                    </View>
                )}
            />
            <TextInput
                style={styles.input}
                value={prompt}
                onChangeText={(text) => setPrompt(text)}
                placeholder="Escribir algo..."
            />
            <TouchableOpacity style={styles.button} onPress={message}>
                <Text style={styles.buttonText}>Preguntar</Text>
            </TouchableOpacity>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    body: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize:15
    },
    button: {
        backgroundColor: '#DE5F65',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    }
})

export default ChatGPT