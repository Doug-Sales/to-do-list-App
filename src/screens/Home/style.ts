import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',

    },
    inputTask: {
        flex: 1,
        backgroundColor: '#262626',
        height: 56,
        padding: 16,
        marginRight: 8,
        borderRadius: 8,
        color: 'white',

    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginTop: -28,
        paddingHorizontal: 30,

    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },
    taskContainer: {
        flexDirection: 'row',
        marginTop: 34,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    counterContainer: {
        width: 24,
        height: 16,
        alignItems: 'center',
        backgroundColor: '#333333',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#D9D9D9',
        fontSize: 12,

    },
    infoListCreated: {
        color: '#4EA8DE',
        fontSize: 16,
        marginRight: 10,
    },
    infoListCompleted: {
        color: '#8284FA',
        fontSize: 16,
        marginRight: 10,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    separator: {
        marginVertical: 20,
        marginHorizontal: 30,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    containerEmptyListStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    baseTextEmptyList: {
        fontSize: 18,
        fontWeight: '700',
        color: '#808080',
    },
    textEmptyList: {
        fontSize: 16,
        fontWeight: '400',
        color: '#808080',
    },


})


