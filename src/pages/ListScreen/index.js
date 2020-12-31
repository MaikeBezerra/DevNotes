import React, { useLayoutEffect } from "react";
import { View, TouchableHighlight, Image } from "react-native";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import { styles } from "./style";

export default () => {
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <TouchableHighlight 
                    style={styles.containerButton} 
                    underlayColor="transparent"
                    onPress={()=>{}}>
                    <Image style={styles.addButton} source={require('../../assets/more.png')} />
                </TouchableHighlight>
            )
        });
    }, []);

    return(
        <View style={styles.container}>
            
        </View>
    );
}