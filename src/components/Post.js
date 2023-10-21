import { Image, StyleSheet, Text, View } from 'react-native'
import { Entypo, AntDesign, Foundation, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
const Post = ({ post }) => {
    return (
        <View style={{ marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                <Image
                    src={post.User.avatar}
                    style={{
                        width: 50,
                        aspectRatio: 1,
                        borderRadius: 50,
                        marginRight: 10
                    }}
                />
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 3 }}>{post.User.name}</Text>
                    <Text style={{ color: 'gray' }}>@{post.User.handle}</Text>
                </View>
                <View style={{ marginLeft: 'auto', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 5, color: 'gray' }}>
                        3 hours ago
                    </Text>
                    <Entypo
                        name="dots-three-horizontal"
                        size={18}
                        color="gray"
                    />
                </View>
            </View>

            <Text style={{ margin: 10, lineHeight: 18 }}>{post.text}</Text>

            <Image src={post.image} style={{ width: '100%', aspectRatio: 1 }} />

            <View style={{ margin: 10, flexDirection: 'row' }}>
                <AntDesign name="hearto"
                    size={22}
                    color="black"
                    style={{ marginRight: 15 }}
                />
                <FontAwesome5 name="dollar-sign"
                    size={20}
                    color="black"
                    style={{ marginRight: 15 }}
                />
            </View>

            <Text style={{ fontWeight: '500', marginHorizontal: 10 }}>{post.likes} Likes</Text>
        </View >
    )
}

export default Post

const styles = StyleSheet.create({})