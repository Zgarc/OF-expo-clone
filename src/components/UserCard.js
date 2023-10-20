import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function UserCard({ user }) {

    return <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.userCard} >

        <View style={styles.overlay} />
        {/* Image */}
        <Image
            src={user.avatar}
            style={styles.userImage} />

        {/* Name and Handle */}
        <View>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>{user.name}</Text>
            <Text style={{ color: 'white' }}>@{user.handle}</Text>
        </View>
    </ImageBackground>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
  userCard: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 5,
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
  }
});