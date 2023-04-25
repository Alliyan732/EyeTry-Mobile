import * as React from 'react';
import { View,StyleSheet} from 'react-native';

// importing form components
import Container from '../../components/ui/Container';
import ImageWithDetails from '../../components/ui/ImageWithDetails';
import PrimaryButton from '../../components/ui/PrimaryButton';
import HorizontalDivider from   '../../components/ui/HorizontalDivider';
import MediumButtonOutline from '../../components/ui/MediumButtonOutline';
import EditableUserDetailItem from '../../components/forms/EditableUserDetailItem';
import { TextInput } from 'react-native-paper';


const EditDetails = ({navigation}) =>{
    // State Vars
    const [firstName,setFirstName] = React.useState('');
    const [lastName,setLastName] = React.useState('');
    const [email,setEmai] = React.useState('');

    // Methods
    handleDeleteAccount = () => {navigation.navigate('DeleteAccount')}
    handleChangePassword = () => {navigation.navigate('ChangePassword')}

    return(
        <Container >
            <View style={styles.sec_cont}>
                <EditableUserDetailItem iconName="person" label="First Name" secureTextEntry={false} placeholder="Abdul Sammi" onChangeText={setFirstName} value={firstName}/>
                <EditableUserDetailItem iconName="person" label="Last Name" secureTextEntry={false} placeholder="Gul" onChangeText={setLastName} value={lastName}/>
                <EditableUserDetailItem iconName="mail" label="Email" secureTextEntry={false} placeholder="gulsammi@protonmail.com" onChangeText={setEmai} value={email}/>
                <ImageWithDetails
                    label="Your Photo"
                    imageSource={require('../../assets/images/persons/person.png')} 
                    iconSource={require('../../assets/images/upload.png')} 
                    title="Edit your photo"
                    subtitle1="Update"
                    subtitle2="Delete"
                />
                <PrimaryButton title='Save' color='#3056D3' style={{alignSelf:'center',marginVertical:26}}/>
                <HorizontalDivider text='OR'/>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:26}}>
                    <MediumButtonOutline title='Change Password' color='#000' style={{width:160}} onPress={handleChangePassword}/>
                    <MediumButtonOutline title='Delete Account' color='red' style={{width:150}} onPress={handleDeleteAccount}/>
                </View>
            </View>
        </Container>
    )

}

const styles = StyleSheet.create({
    btn_style:{alignSelf:'center',marginTop:39},
    sec_cont:{marginTop:25}
})

export default EditDetails;