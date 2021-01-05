import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        marginEnd: 15
    },
    addButton: {
       width: 24,
       height: 24
    },
    noteList: {
        flex: 1,
        width: '100%'
    },
    noNoteContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    noNoteImg: {
        width: 50,
        height: 50,
        marginBottom: 10
    },
    noNoteMsg: {
        color: "#FFF",
        fontSize: 17
    }
})