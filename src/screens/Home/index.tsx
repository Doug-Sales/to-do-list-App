import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { RocketLogo } from "../../components/Icons";
import { BoxTasks } from "../../components/BoxTasks";
import { styles } from './style';

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [textInput, setTextInput] = useState<string>(" ");
    const [counter, setCounter] = useState<number>(0);
    const [counterDone, setCounterDone] = useState<number>(0);


    function handleTaskAdd() {

        if (/[\w]+/gi.test(textInput)) {
            setTasks(prevState => [...prevState, textInput]);
            setCounter(counter + 1);
            setTextInput('');
        } else {
            return Alert.alert('Inválido', 'Você deve criar ao menos uma tarefa', [
                {
                    text: 'Entendi'
                }],
                {
                    cancelable: true
                })
        }
    }

    function handleTaskRemove(task: string) {
        Alert.alert('Deletado', 'Tarefa deletada com sucesso ;)', [
            {
                text: 'Confirmar',
                onPress: () => setTasks(prevState => prevState.filter(taskDeleted => taskDeleted !== task))
            }],
            {
                cancelable: true,
                onDismiss: () => setTasks(prevState => prevState.filter(taskDeleted => taskDeleted !== task)),
            }
        )
        setCounter(counter - 1)
    }



    return (

        <View style={styles.container}>
            <RocketLogo />

            <View style={styles.form} >
                <TextInput
                    style={styles.inputTask}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    keyboardType="ascii-capable"
                    onChangeText={setTextInput}
                    value={textInput}

                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd} >
                <Ionicons name="add-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.taskContainer} >
                <View style={styles.info} >
                    <Text style={styles.infoListCreated}>
                        Criadas
                    </Text>
                    <Text style={styles.counterContainer} >
                        {counter}
                    </Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoListCompleted}>
                        Concluidas
                    </Text>
                    <Text style={styles.counterContainer}>
                        {counterDone}
                    </Text>
                </View>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <BoxTasks
                        key={item}
                        task={item}
                        onRemove={() => {
                            handleTaskRemove(item);
                            if (counterDone > 0)
                                setCounterDone(counterDone - 1);
                            else
                                setCounterDone(0);

                        }}
                        counterCreated={() => setCounter(counter + 1)}
                        counterDoneChecked={() => setCounterDone(counterDone + 1)}
                        decrementCounterDone={() => setCounterDone(counterDone - 1)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (<View style={{ height: 12 }} />)}
                ListEmptyComponent={() => (
                    <View style={styles.containerEmptyListStyle} >
                        <FontAwesome5 name="tasks" size={80} color="#808080" style={{ marginBottom: 30 }} />
                        <Text style={styles.baseTextEmptyList}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.textEmptyList}  >
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

















