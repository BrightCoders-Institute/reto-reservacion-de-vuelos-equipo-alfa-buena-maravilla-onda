import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: Config.WEB_CLIENT_ID,
  offlineAccess: true,
});

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userCredential = await auth().signInWithCredential(googleCredential);
    console.log('Inicio de sesión exitoso:', userCredential.user);
    return userCredential;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return {error};
  }
};

export default signInWithGoogle;
