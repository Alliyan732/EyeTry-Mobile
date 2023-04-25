
import * as React from 'react';
import { View, Text,StyleSheet,Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import LabelledTextInput from '../../components/forms/LabelledTextInput';
import SelectInput from '../../components/forms/SelectInput';
import { InputField } from '../../components/forms/InputField';

export default function AddPaymentMethod2({navigation}){

    const [address,setAddress] = React.useState(null)
    const [addressLine2,setAddressLine2] = React.useState(null)
    const [city,setCity] = React.useState(null)
    const [postal,setPostal] = React.useState(null)
    const [phone,setPhone] = React.useState(null)

    const [selectedCountry,setSelectedCountry] = React.useState('Pakistan')

    const countries = ['Pakistan','Afghanistan','UAE','USA','India','Bangladesh','Saudi-Arabia']

    // methods


    const savePaymentMethod = () => {
        Alert.alert("Payment Method Saved")
        // navigation.navigate("AddressBook")
    }


    return(
    <Container >
        <ScrollView >
            <View >
                <Text style={styles.txt}>Billing Address </Text>
                <InputField style={styles.input} name='Address' value={address} onChangeText={setAddress}/>
                <InputField style={styles.input} name='Apartment, suite, etc (optional)' value={addressLine2} onChangeText={setAddressLine2} />
                <InputField style={styles.input} name='City' value={city} onChangeText={setCity}/>
                <InputField style={styles.input} name='Postal' value={postal} onChangeText={setPostal}/>
                <InputField style={styles.input} name='Phone' value={phone} onChangeText={setPhone}/>
                <SelectInput array={countries} labelVisible={false}  selectedValue={selectedCountry} setSelectedValue={setSelectedCountry}  pickerStyle={styles.pickerStyle} style={styles.selectInput}/>
                <PrimaryButton title="Save" onPress={savePaymentMethod} color={'#3056D3'} style={styles.btn}/>
            </View>
        </ScrollView>
    </Container>
    )
}

const styles = StyleSheet.create({
    txt:{
        color:'#000',
        fontSize:16,
        alignSelf:'flex-start',
        marginVertical:25
    },
    input:{
        width:'100%',
        marginBottom:25
    },
    pickerStyle:{
        width:350,
        height:48,
        color:'#ACB6BE'
    },
    selectInput:{
        width:'100%',
        justifyContent:'center',
    },
    btn:{
        alignSelf:'center',
        marginVertical:40
    }
})