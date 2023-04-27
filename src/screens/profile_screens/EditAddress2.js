
import * as React from 'react';
import { ScrollView,View, Text,StyleSheet,Alert,Image,  TouchableOpacity, ScrollScro, ScrollViewllView } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import LabelledTextInput from '../../components/forms/LabelledTextInput';
import SelectInput from '../../components/forms/SelectInput';

export default function EditAddress2({navigation}){

    const [city,setCity] = React.useState('')
    const [postalCode,setPostalCode] = React.useState('')
    const [phone,setPhone] = React.useState('')

    const [selectedCountry,setSelectedCountry] = React.useState(null)

    const countries = ['Pakistan','Afghanistan','UAE','USA','India','Bangladesh','Saudi-Arabia']

    // methods


    const saveAddress = () => {
        Alert.alert("Address Saved")
        navigation.navigate("AddressBook")
    }

    return(
        <Container >
            <ScrollView contentContainerStyle={{padding:'5%',}}>
                <LabelledTextInput label="City" placeholder="Islamabad" value={city} onChangeText={setCity} style={styles.input}/>
                <LabelledTextInput label="Postal Code" placeholder="11000" value={postalCode} onChangeText={setPostalCode} style={styles.input}/>
                <LabelledTextInput label="Phone" placeholder="+92300000000" value={phone} onChangeText={setPhone} style={styles.input}/>
                {/* <LabelledTextInput label="Country" placeholder="Pakistan" value={country} onChangeText={setCountry} style={styles.input}/> */}
                <SelectInput array={countries} label={'Select Country'} selectedValue={selectedCountry} setSelectedValue={setSelectedCountry} labelStyle={{alignSelf:'flex-start',}} pickerStyle={{width:'100%',}} style={{width:'100%',justifyContent:'center',height:57}} containerStyle={{width:'100%'}}/>
                <PrimaryButton title="Save" onPress={saveAddress} color={'#3056D3'} style={styles.btn}/>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        marginBottom:'5%',
        height:57
    },
    btn:{
        alignSelf:'center',
        marginVertical:'10%'
    }
})