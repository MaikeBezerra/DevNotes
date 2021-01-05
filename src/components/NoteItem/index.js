import React from "react";
import { TouchableHighlight, Text } from "react-native";

import { styles } from "./style";

export default ({ data, index, onPress }) => {
    return (
        <TouchableHighlight style={styles.noteContainer}
            onPress={()=>onPress(index)}
        >
            <Text style={styles.textNote}>{data.title}</Text>
        </TouchableHighlight>
    );
}