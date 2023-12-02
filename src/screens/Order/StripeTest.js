import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { getDataAsyncStorage } from "../../utils/AsynchronusStorage/asyncStorage";
import { reGenerateAccessToken } from "../../services/Authentication/authapi";

const Payment = () => {
  const [name, setName] = useState("");
  const stripe = useStripe();

  const subscribe = async () => {
    try {
      const accessToken = await getDataAsyncStorage("accessToken")
      const response = await fetch("http://localhost:3000/payment/process_payment", {
        method: "POST",
        body: JSON.stringify({ amount: 200 }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Alliyan'
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Payment complete, thank you!");
    } catch (err) {
              // Server is returning 403 for expired token
              if (err.response && err.response.status == 403) {
                try {
                    console.log("Error Catched")
                    await reGenerateAccessToken()
                    return subscribe()
                }
                catch (e) {
                    console.error("Error while refreshing token", e)
                    throw e
                }
            }
      console.error(err);
      Alert.alert("Something went wrong, try again later!");
    }
  };

  return (
    <View>
      <Button title="Subscribe - 200" onPress={subscribe} />
    </View>
  );
};

export default Payment;