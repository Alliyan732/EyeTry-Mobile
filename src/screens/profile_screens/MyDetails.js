import * as React from 'react';
import { View,StyleSheet, ScrollView} from 'react-native';

// importing form components
import Container from '../../components/ui/Container';
import UserDetailItem from '../../components/ui/UserDetailItem';
import PrimaryButtonOutline from '../../components/ui/PrimaryButtonOutline';
import { getUserData } from '../../api/userapi';

const MyDetails = ({navigation}) =>{

    const [user,setUser] = React.useState(null)
    React.useEffect(()=>{
        const setData = async()=>{
            try{
                const user = await getUserData();
                setUser(user)
            }
            catch(e){
                throw e
            }
        }
        setData()
    },[])

    // Methods 
    const goToEditDetails = () => {navigation.navigate('EditDetails')}
    return(
        user &&
            <Container >
                <ScrollView contentContainerStyle={{padding:'4%',}}>
    
                    <UserDetailItem iconName="person" label="First Name" details={user.firstName}/>
                    <UserDetailItem iconName="person" label="Last Name" details={user.lastName}/>
                    <UserDetailItem iconName="mail" label="Email Address" details={user.email}/>
                    <PrimaryButtonOutline title='Edit' color='#3056D3' onPress={goToEditDetails} style={styles.btn_style}/>
                </ScrollView>
            </Container>
        
    )

}

const styles = StyleSheet.create({
    btn_style:{
        alignSelf:'center',
        marginTop:39,
        
    },
    sec_cont:{marginTop:42}
})
export default MyDetails;