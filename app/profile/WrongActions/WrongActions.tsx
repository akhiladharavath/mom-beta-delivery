import { COLORS } from "@/constants/COLORS"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { screenWidht } from '@/constants/ScreenConfig'
import WrongActionsList from "@/components/WrongActions/WrongActionList"
import { useNavigation } from "@react-navigation/native"

function WrongActions() {

    const navigation = useNavigation()

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.actionContainer}>
            <View style={styles.actionDetailsContainer}>
                <View style={styles.laughContainer}>
                    <AntDesign name="smileo" color={COLORS.primary} size={24} />
                </View>
                <Text style={styles.actionCount}>0</Text>
                <Text>Wrong actions in the last 30 days</Text>
            </View>
            <TouchableOpacity style={styles.actionDetailsNav} onPress={() => navigation.navigate('WrongActionDetails')}>
                <Text style={styles.actionDetailsNavContent}>See wrong action history</Text>
                <AntDesign name="right" size={20} color={COLORS.primary} />
            </TouchableOpacity>

        </View>
        <WrongActionsList />
    </SafeAreaView>
}

export default WrongActions

const styles = StyleSheet.create({
    actionContainer: {
        justifyContent:"center",
        alignItems: "center"
    },
    actionDetailsContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        gap: 6,
        borderRadius: 12,
        elevation: 2,
        width:screenWidht/1.18
    },
    actionCount: {
        fontSize: 30,
        fontWeight: "bold"
    },
    laughContainer: {
        padding: 12,
        backgroundColor: COLORS.secondary,
        borderRadius: 34
    },
    actionDetailsNav: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        padding: 20,
        paddingHorizontal:50,
        marginTop: 30,
        width:screenWidht/1.18
    },
    actionDetailsNavContent: {
        color: COLORS.primary,
        fontWeight: "bold"
    },

})