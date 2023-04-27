import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    checkboxContainer: {
        paddingRight: 15,
    },
    checkbox: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1E6F9F',
        width: 20,
        height: 20,
        padding:5
    },
    containerBoxText: {
        width: 250,
    },
    boxText: {
        color: '#F2F2F2',
        fontSize: 16,
        textAlign: 'left',
       
    },
    checkedText:{
        color: '#808080',
        fontSize: 16,
        textAlign: 'left',
        textDecorationLine: 'line-through',
    },
    containerDeleteIcon: {
        marginRight: 15,
        paddingLeft: 15
    },
    deleteIcon: {
        color: '#808080',
    },
    deleteIconChecked:{
        color:'#E25858',
    },
})
















