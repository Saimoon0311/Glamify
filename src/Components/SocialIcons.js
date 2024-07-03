import React, {useEffect, useState} from 'react';
import {LoginManager} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {v4 as uuid} from 'uuid';
import 'react-native-get-random-values';
import {appleAuthAndroid} from '@invertase/react-native-apple-authentication';
import {apple, google, facebook, tile} from '@/Assets/Images';
import {Text, Image, View} from 'react-native';
import {Touchable} from './Touchable';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const SocialIcons = ({width = 84, height = 0.5}) => {
  const [user, setUser] = useState({});

  // Google Login

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'm.ma.md21m321m;l3m21m321',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedInProgress();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due', userInfo);
      setUser(userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code == statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancel Login');
      } else if (error.code == statusCodes.IN_PROGRESS) {
        console.log('Logining');
      } else if (error.code == statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Service not Available');
      } else {
        console.log('Other error');
      }
    }
  };

  const isSignedInProgress = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit', user);
      setUser(userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code == statusCodes.SIGN_IN_REQUIRED) {
        alert('User is not Login');
        console.log('User is not Login');
      } else {
        alert('Something Went Wrong');
        console.log('Something Went Wrong');
      }
    }
  };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setUser({});
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Facebook Login

  const signInFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login Cancelled' + JSON.stringify(result));
        } else {
          alert(
            'Login success with permisssions: ' +
              result.grantedPermissions.toString(),
          );
          alert('Login Success' + result.toString());
        }
      },
      function (error) {
        alert('Login failed with error: ' + error);
        console.log(error);
      },
    );
    // LoginManager.logInWithPermissions([
    //   'public_profile',
    //   'email',
    //   'user_friends',
    // ])
    //   .then(result => {
    //     if (result.isCancelled) {
    //       console.log('Login cancelled', result);
    //     } else {
    //       AccessToken.getCurrentAccessToken().then(data => {
    //         const accessToken = data.accessToken;
    //         console.log('accessToken', accessToken);
    //         const responseInfoCallback = async (error, results) => {
    //           if (error) {
    //             console.log('Error fetching data=', error.toString());
    //           } else {
    //             console.log('Success fetching data=', results);
    //           }
    //         };
    //         const infoRequest = new GraphRequest(
    //           '/me',
    //           {
    //             accessToken,
    //             parameters: {
    //               fields: {
    //                 string: 'email,name,first_name,middle_name,last_name',
    //               },
    //             },
    //           },
    //           responseInfoCallback,
    //         );
    //         new GraphRequestManager().addRequest(infoRequest).start();
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  // Apple Login

  const doAppleLogin = async () => {
    // Generate secure, random values for state and nonce
    const rawNonce = uuid();
    const state = uuid();

    try {
      // Initialize the module
      appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: 'com.example.client-android',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: 'https://example.com/auth/callback',

        // [OPTIONAL]
        // Scope.ALL (DEFAULT) = 'email name'
        // Scope.Email = 'email';
        // Scope.Name = 'name';
        scope: appleAuthAndroid.Scope.ALL,

        // [OPTIONAL]
        // ResponseType.ALL (DEFAULT) = 'code id_token';
        // ResponseType.CODE = 'code';
        // ResponseType.ID_TOKEN = 'id_token';
        responseType: appleAuthAndroid.ResponseType.ALL,

        // [OPTIONAL]
        // A String value used to associate a client session with an ID token and mitigate replay attacks.
        // This value will be SHA256 hashed by the library before being sent to Apple.
        // This is required if you intend to use Firebase to sign in with this credential.
        // Supply the response.id_token and rawNonce to Firebase OAuthProvider
        nonce: rawNonce,

        // [OPTIONAL]
        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
      });

      const response = await appleAuthAndroid.signIn();
      if (response) {
        const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
        const id_token = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
        const user = response.user; // Present when user first logs in using appleId
        const state = response.state; // A copy of the state value that was passed to the initial request.
        console.log('Got auth code', code);
        console.log('Got id_token', id_token);
        console.log('Got user', user);
        console.log('Got state', state);
      }
    } catch (error) {
      if (error && error.message) {
        switch (error.message) {
          case appleAuthAndroid.Error.NOT_CONFIGURED:
            console.log('appleAuthAndroid not configured yet.');
            break;
          case appleAuthAndroid.Error.SIGNIN_FAILED:
            console.log('Apple signin failed.');
            break;
          case appleAuthAndroid.Error.SIGNIN_CANCELLED:
            console.log('User cancelled Apple signin.');
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        height: 100,
        // height: '20%',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '85%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image alt="Tile" source={tile} width={width} height={height} />
        <Text
          style={{
            fontSize: FontSize.medium,
            fontWeight: '600',
            fontFamily: FontFamily.bold,
            color: Colors.heading,
          }}>
          sign in with
        </Text>
        <Image alt="Tile" source={tile} width={width} height={height} />
      </View>
      {/* <LoginButton
        publishPermissions={[
          'publish_actions,user_birthday, user_religion_politics, user_relationships, user_relationship_details, user_hometown, user_location, user_likes, user_education_history, user_work_history, user_website, user_managed_groups, user_events, user_photos, user_videos, user_friends, user_about_me, user_status, user_games_activity, user_tagged_places, user_posts, user_actions.video, user_actions.news, user_actions.books, user_actions.music, user_actions.fitness, public_profile, basic_info',
        ]}
        onLoginFinished={(error, result) => {
          if (error) {
            alert('login has error: ' + result.error);
          } else if (result.isCancelled) {
            alert('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              meow_accesstoken = data.accessToken;
              alert(meow_accesstoken.toString());
            });
          }
        }}
        onLogoutFinished={() => alert('logout.')}
      /> */}

      <View
        style={{
          width: '60%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Touchable
          Opacity={0.4}
          // onPress={signInFacebook}
        >
          <Image
            resizeMode="contain"
            alt="facebook"
            source={facebook}
            width={null}
            height={null}
          />
        </Touchable>
        <Touchable
          Opacity={0.4}
          // onPress={doAppleLogin}
        >
          <Image
            resizeMode="contain"
            alt="apple"
            source={apple}
            width={null}
            height={null}
          />
        </Touchable>
        <Touchable
          Opacity={0.4}
          // onPress={signIn}
        >
          <Image
            resizeMode="contain"
            alt="google"
            source={google}
            width={null}
            height={null}
          />
        </Touchable>
      </View>
    </View>
  );
};
export default SocialIcons;
