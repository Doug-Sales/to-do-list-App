import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Pressable } from "react-native";
import { styles } from "./style";


type Props = {
    task: String;
    onRemove: () => void;
    counterDoneChecked: () => void;
    counterCreated: () => void;
    decrementCounterDone: () => void;
}

export function BoxTasks({ task, counterDoneChecked, onRemove, counterCreated, decrementCounterDone }: Props) {
    const [isChecked, setChecked] = useState(false);


    return (
        <View style={styles.container} >
            <Pressable style={styles.checkboxContainer} hitSlop={10}  >
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={(value) => {
                        if (value) {
                            counterDoneChecked()
                        } else {
                            decrementCounterDone()
                        }
                        setChecked(value)
                    }}
                    color={isChecked ? '#1E6F9F' : undefined}
                />
            </Pressable>
            <View style={styles.containerBoxText} >
                <Text style={!isChecked ? styles.boxText : styles.checkedText}>{task}</Text>
            </View>
            <Pressable style={styles.containerDeleteIcon} hitSlop={10} onPress={onRemove}  >
                <AntDesign name="delete" size={19} style={isChecked ? styles.deleteIconChecked : styles.deleteIcon} />
            </Pressable>
        </View>
    )
}









