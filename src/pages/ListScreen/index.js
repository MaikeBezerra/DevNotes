import React, { useLayoutEffect } from "react";
import { View, TouchableHighlight, Image, FlatList, Text } from "react-native";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import { styles } from "./style";
import NoteItem from "../../components/NoteItem";

export default () => {
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);
    //const list = [];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <TouchableHighlight 
                    style={styles.containerButton} 
                    underlayColor="transparent"
                    onPress={()=>navigation.navigate('EditNote')}>
                    <Image style={styles.addButton} source={require('../../assets/more.png')} />
                </TouchableHighlight>
            )
        });
    }, []);

    const handleNotePress = (index) => {
        navigation.navigate('EditNote', {
            key: index
        });
    }

    return(
        <View style={styles.container}>
            {list.length > 0 &&
                <FlatList 
                    style={styles.noteList} 
                    data={list}
                    renderItem={({item, index})=>(
                        <NoteItem 
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()} 
                />
            }
            {list.length == 0 &&
                <View style={styles.noNoteContainer}>
                    <Image style={styles.noNoteImg} source={require('../../assets/note.png')}/>
                    <Text style={styles.noNoteMsg}>Nenhuma anotação</Text>
                </View>
            }
        </View>
    );
}