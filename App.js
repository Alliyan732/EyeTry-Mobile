
import * as React from 'react';
import { View } from 'react-native';

import FeatherIcons from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';

import { getDataAsyncStorage } from './src/utils/AsynchronusStorage/asyncStorage';

// Importing Screens
import SignInScreen from './src/screens/Auth/SignIn';
import SignUpScreen from './src/screens/Auth/SignUp';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPassword';
import ResetLinkScreen from './src/screens/Auth/ResetLink';
import HomeTabScreen from './src/screens/HomeTabNavigator/HomeTabScreen'; 
{/* Home Component contains the tab navigation */ }

// Vission Assessments Screens
import VisionAssessmentHome from './src/screens/VisionAssessments/VisionAssessmentsHome';
import VisionAcuityInfo from './src/screens/VisionAssessments/VisionAcuityInfo';
import VisionAcuityTest from './src/screens/VisionAssessments/VisionAcuityTest';
import ColorBlindInfo from './src/screens/VisionAssessments/ColorBlindInfo';
import ColorBlindTest from './src/screens/VisionAssessments/ColorBlindTest';
import ContrastSensitivityInfo from './src/screens/VisionAssessments/ContrastSensitivityInfo';
import ContrastSensitivityTest from './src/screens/VisionAssessments/ContrastSensitivityTest';
import AstigmatismInfo from './src/screens/VisionAssessments/AstigmatismInfo';
import AstigmatismTest from './src/screens/VisionAssessments/AstigmatismTest';

import HomeScreen from './src/screens/HomeScreen';
import Glasses from './src/screens/Glasses';


const Stack = createNativeStackNavigator();

function App() {
  const [initialRouteName, setInitialRouteName] = React.useState('HomeTabScreen')
  const [loading, setIsLoading] = React.useState(false)

  // React.useEffect(() => {
  //   const checkToken = async () => {
  //     const token = await getDataAsyncStorage("refreshToken")
  //     if (token === null) {
  //       setInitialRouteName('SignIn')
  //       setIsLoading(false)
  //     }
  //     else {
  //       setInitialRouteName('HomeTabScreen')
  //       setIsLoading(false)
  //     }
  //   }
  //   checkToken()
  // }, [])


  return (
    loading ? <ActivityIndicator size="large" /> : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          {/* Vission Assessments */}
          <Stack.Screen name="VisionAssessmentsHome" component={VisionAssessmentHome} options={{ headerShown: false }}/>
          <Stack.Screen name="VisionAcuityInfo" component={VisionAcuityInfo} options={{ headerShown: false }}/>
          <Stack.Screen name="VisionAcuityTest" component={VisionAcuityTest} options={{ headerShown: false }}/>
          <Stack.Screen name="ColorBlindInfo" component={ColorBlindInfo} options={{ headerShown: false }}/>
          <Stack.Screen name="ColorBlindTest" component={ColorBlindTest} options={{ headerShown: false }}/>
          <Stack.Screen name="ContrastSensitivityInfo" component={ContrastSensitivityInfo} options={{ headerShown: false }}/>
          <Stack.Screen name="ContrastSensitivityTest" component={ContrastSensitivityTest} options={{ headerShown: false }}/>
          <Stack.Screen name="AstigmatismInfo" component={AstigmatismInfo} options={{ headerShown: false }}/>
          <Stack.Screen name="AstigmatismTest" component={AstigmatismTest} options={{ headerShown: false }}/>
          
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ResetLink" component={ResetLinkScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeTabScreen" component={HomeTabScreen} options={{ headerShown: false }}/>

          <Stack.Screen name="Glasses" component={Glasses} options={{
          headerTitle: "Eyeglasses",
          headerRight: () => (
            <View className="flex flex-row gap-10">
              <FeatherIcons name="search" size={30} color="#0ea5e9"/>
              <MaterialIcons name="filter-list" size={30} color="#0ea5e9"/>
            </View>
          ),
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;
