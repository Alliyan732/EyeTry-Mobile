import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Alert, Image, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { viewAddresses } from '../../services/Profile/userapi';
import { deleteAddress } from '../../services/Profile/userapi';


// Importing components
import PrimaryButton from '../../components/ui/PrimaryButton';
import Container from '../../components/ui/Container';
import AddressItem from '../../components/ui/AddressItem';


export default function AddressBook({ navigation }) {

    const [addresses, setAddresses] = React.useState([])
    const [isDataFetched, setIsDataFetched] = React.useState(false)
    const isFocused = useIsFocused()
    const [changed, setChanged] = React.useState(false)

    React.useEffect(() => {
        const getAllAddresses = async () => {
            try {
                const response = await viewAddresses()
                setAddresses(response.addressBook)
                setIsDataFetched(true)
            }
            catch (e) {

            }
        }
        getAllAddresses()
    }
        , [isFocused, changed])

    const handleAddNewAddress = () => {
        navigation.navigate('AddAddress')
    }
    const handleEditAddress = (addressId) => {
        navigation.navigate("EditAddress", {
            addressId: addressId
        })
    }
    const handleDeleteAddress = async (addressId) => {
        try {
            await deleteAddress(addressId);
            setChanged(!changed)
        }
        catch (e) {
            console.log("Some Issue occured while deleting address")
            throw e
        }
    }

    return (
        isDataFetched ? (
            <Container>
                <ScrollView contentContainerStyle={styles.sec_container}>
                    {addresses.map((address) => {
                        return (
                            <AddressItem key={address._id} name={address.firstName} addressLine={address.currentAddress} city={address.city + '  ' + address.zipCode} phoneNumber={address.country} isDefaultAddress={true}
                                handleEditAddress={() => handleEditAddress(address._id)} handleDeleteAddress={() => handleDeleteAddress(address._id)}
                            />
                        )

                    })}
                    {
                        addresses.length == 0 && (<Text style={{ fontWeight: '500', color: '#000', fontSize: 20, alignSelf: 'center', paddingVertical: '3%' }}>No Addresses were added by you</Text>)
                    }

                    <PrimaryButton title='Add New Address' onPress={handleAddNewAddress} style={{ marginVertical: '5%', alignSelf: 'center' }} />
                </ScrollView>
            </Container>
        ) : <ActivityIndicator size="large" style={{ marginTop: '50%' }} />
    )
}

const styles = StyleSheet.create({
    sec_container: {
        padding: '4%',
    },
})