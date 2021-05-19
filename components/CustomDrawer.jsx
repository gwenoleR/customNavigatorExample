import {
    DrawerContentScrollView, DrawerItem
} from "@react-navigation/drawer";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomDrawer(props) {

    const signOut = React.useCallback(
        () => {
            console.log('A action example');
        },
        [],
    )


    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <DrawerItem label='On va au notifs' onPress={() => props.navigation.navigate('Notifications')} />
                <DrawerItem label='On va au Drawer home' onPress={() => props.navigation.navigate('DrawerHome')} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={[styles.drawerItem, { marginBottom: 32 }]}
                onPress={signOut}
            >
                <Text style={styles.drawerText}>Deconnexion</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
    },
    drawerItem: {
        height: 44,
        flexDirection: "row",
        paddingLeft: 24,
        alignItems: "center",
        backgroundColor: 'blue'
    },
    drawerText: {
        color: 'white',
        paddingLeft: 16,
    },
});
