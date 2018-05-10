import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name, id }) => (
    // Set flexDirection style dynamically based on position
    <View style={[styles.container, 
        (id===0) ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }]} 
        key={name}>
        <Image source={{ uri: profileImage }} style={styles.contactImage} />
        <Text>{name}</Text>

    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'flex-start',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:10,
        marginTop:10
    }
});

export default ContactListItem;
