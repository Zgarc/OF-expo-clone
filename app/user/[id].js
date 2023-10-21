import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import users from '../../assets/data/users';
import { AntDesign } from '@expo/vector-icons';
const ProfilePage = () => {
    const router = useRouter();
    const { id } = useGlobalSearchParams();

    const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found</Text>
    }
    return (
        <View style={{}}>
            <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
                <View style={styles.overlay} />
                <SafeAreaView style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign
                        onPress={() => router.back()}
                        name="arrowleft"
                        size={24}
                        color="white"
                        style={{ marginRight: 10 }} />

                    <View>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, marginBottom: 5 }}>{user.name}</Text>
                        <Text style={{ color: 'white' }}>1.4k Posts · 64.3 Likes · 15.3k Fans</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={{ padding: 10 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: -50
                    }}
                >
                    <Image src={user.avatar} style={styles.userImage} />
                    <AntDesign name="sharealt" size={24} color="royalblue" />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 600, marginVertical: 4 }}>{user.name}</Text>
                <Text style={{ color: 'gray', marginBottom: 10 }}>@{user.handle}</Text>
                <Text style={{ lineHeight: 20 }}>{user.bio}</Text>
                <Text style={{ color: 'gray', marginTop: 20 }}>SUBSCRIPTION</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>SUBSCRIBED</Text>
                    <Text style={styles.buttonText}>{user.subscriptionPrice === 0 ? 'FOR FREE' : `$${user.subscriptionPrice} / month`}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: 200,
        width: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ...StyleSheet.absoluteFill,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        marginRight: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginVertical: 10,
    },
    buttonText: {
        color: 'royalblue',
        fontWeight: '600'
    }
});

export default ProfilePage;