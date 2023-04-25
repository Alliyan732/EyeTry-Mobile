import * as React from 'react';
import { View, Text,StyleSheet,Alert, Touchable, TouchableOpacity,Image } from 'react-native';


// importing form components

import { InputField } from '../../components/forms/InputField';

const LabelledTextInput = ({label,onChangeText,value,placeholder,secureTextEntry,style}) =>{


    

    return(
        <View style={[styles.sec_container]}>
            <Text style={styles.label}>{label}</Text>
            <InputField name={placeholder} onChangeText={onChangeText} value={value} style={style} />
       </View>
    )

}

const styles = StyleSheet.create({
    sec_container:{
        alignItems:'center',
    },
    label:{
        fontSize:16,
        fontWeight:'500',
        color:'#000',
        paddingVertical:12,
        alignSelf:'flex-start'
    }

})

export default LabelledTextInput;