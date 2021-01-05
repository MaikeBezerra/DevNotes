import React, {useState} from "react";
import { View, TextInput } from "react-native";

import { styles } from "./style";

export default () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputTitle}
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Digite o título da notação"
                placeholderTextColor="#CCC"
                autoFocus={true}
            />
            <TextInput style={styles.inputBody}
                value={body}
                onChangeText={t=>setBody(t)}
                placeholder="Digite o corpo da notação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
            />
        </View>
    );
}