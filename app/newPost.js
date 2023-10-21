import { StyleSheet, SafeAreaView, TextInput, Button, View, Image, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const newPost = () => {
    const router = useRouter();
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const onPost = () => {
        console.warn('Post', text);
        setText('');
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={{ margin: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <AntDesign
                    onPress={() => router.back()}
                    name="arrowleft"
                    size={24}
                    color="black"
                    style={{ marginRight: 10 }}
                />
                <Text style={{ fontWeight: '500', fontSize: 20 }}>New Post</Text>
            </View>
            <TextInput
                placeholder='Compose new post...'
                value={text}
                onChangeText={setText}
                multiline
                numberOfLines={3}
            />

            <View style={{ marginVertical: 15 }}>
                <Entypo onPress={pickImage} name="image" size={24} color="black" />
            </View>

            {image && <Image src={image} style={{ width: '100%', aspectRatio: 1 }} />}

            <Button
                title='Post'
                onPress={onPost}
            />
        </SafeAreaView>
    )
}

export default newPost

const styles = StyleSheet.create({})