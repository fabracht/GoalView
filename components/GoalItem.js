import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';


export const styles = StyleSheet.create({
    goalBox: {
        marginVertical: 15,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "dashed",
    },
    text: {
        fontSize: 18,
        fontWeight: "700",
        color: "grey",
        maxWidth: "90%",

    },
});

export function GoalItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.removeElement(props.data.item.key)}>
            <View style={[styles.goalBox]} key={props.data.item.key}>
                <View>
                    <Text style={[styles.text]}>
                        {`${props.data.item.value} ${new Date().toLocaleDateString()}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

}

