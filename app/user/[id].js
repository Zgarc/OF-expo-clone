import { Text, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'
import users from '../../assets/data/users';
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';
import { AntDesign } from '@expo/vector-icons';

const ProfilePage = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { id } = useGlobalSearchParams();

    const user = users.find(u => u.id === id);

    if (!user) {
        return <Text>User not found</Text>;
    }

    if (!isSubscribed) {
        return <View>
            <UserProfileHeader
                user={user}
                isSubscribed={isSubscribed}
                setIsSubscribed={setIsSubscribed}
            />
            <View style={{
                backgroundColor: 'gainsboro',
                alignItems: 'center',
                padding: 20
            }}>
                <AntDesign name="lock" size={50} color="gray" />
                <Text
                    style={{
                        backgroundColor: 'royalblue',
                        padding: 15,
                        height: 50,
                        borderRadius: 25,
                        overflow: 'hidden',
                        color: 'white',
                        margin: 20
                    }}>
                    Subscribe to see user's posts
                </Text>
            </View>
        </View>
    }
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                ListHeaderComponent={() => (
                    <UserProfileHeader
                        user={user}
                        isSubscribed={isSubscribed}
                        setIsSubscribed={setIsSubscribed}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ProfilePage;