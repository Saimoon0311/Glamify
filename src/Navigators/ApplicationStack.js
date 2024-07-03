import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import * as Screens from '@/Containers/Screens';
import MainTabs from './MainTabs';
import {modalStyles, screenOptions} from '@/Theme/Variables';
const hidHeaderStyle = {headerShown: false};
const Stack = createStackNavigator();

const ApplicationStack = ({login}) => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{cardStyleInterpolator: () => ({})}}
        initialRouteName="Welcome">
        {login ? (
          <Stack.Group screenOptions={screenOptions}>
            <Stack.Screen
              options={hidHeaderStyle}
              name="MainTabs"
              component={MainTabs}
            />
            <Stack.Screen
              options={modalStyles.locationModal}
              name="PackageFetch"
              component={Screens.PackageFetch}
            />
            <Stack.Screen
              options={modalStyles.locationModal}
              name="CancelBooking"
              component={Screens.CancelBooking}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Location"
              component={Screens.Location}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="AddLocation"
              component={Screens.AddLocation}
            />
            <Stack.Screen
              options={{
                headerShown: true,
              }}
              name="Payment"
              component={Screens.Payment}
            />
            <Stack.Screen
              options={{
                ...modalStyles.locationModal,
                presentation: 'modal',
              }}
              name="AddCard"
              component={Screens.AddCard}
            />
            <Stack.Screen
              options={{
                // ...modalStyles.locationModal,
                presentation: 'modal',
                headerShown: false,
              }}
              name="AddAddressDetails"
              component={Screens.AddAddressDetails}
            />
            <Stack.Screen name="Summary" component={Screens.Summary} />
            <Stack.Screen
              options={modalStyles.locationModal}
              name="Thanks"
              component={Screens.Thanks}
            />
            <Stack.Screen
              name="Feedback"
              component={Screens.Feedback}
              // options={{presentation: 'modal'}}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={hidHeaderStyle}
              name="Availability"
              component={Screens.Availability}
            />
            <Stack.Screen
              options={hidHeaderStyle}
              name="AvailableSlots"
              component={Screens.AvailableSlots}
            />
            <Stack.Screen
              name="ServiceContainer"
              options={({route}) => ({title: route.params?.title})}
              component={Screens.ServiceContainer}
            />
            <Stack.Screen
              name="ServiceDetails"
              options={({route}) => ({title: route.params?.title})}
              component={Screens.ServiceDetails}
            />
            <Stack.Screen
              name="Freelancer"
              options={hidHeaderStyle}
              // options={({route}) => ({title: route.params?.title})}
              component={Screens.Freelancer}
            />
            <Stack.Screen
              name="Chat"
              options={hidHeaderStyle}
              // options={({route}) => ({title: route.params?.title})}
              component={Screens.Chat}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={hidHeaderStyle}>
            <Stack.Screen name="Login" component={Screens.Login} />
            <Stack.Screen name="SignUp" component={Screens.SignUp} />
            <Stack.Screen name="Forgot" component={Screens.Forgot} />
            <Stack.Screen name="NewPassword" component={Screens.NewPassword} />
            <Stack.Screen name="Welcome" component={Screens.Welcome} />
            <Stack.Screen name="Update" component={Screens.Update} />
            <Stack.Screen
              name="Verification"
              component={Screens.Verification}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default ApplicationStack;
