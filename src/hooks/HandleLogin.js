import auth from '@react-native-firebase/auth';

const handleLogIn = async (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!emailRegex.test(email)) {
    console.log('Invalid email format');
    return {typeError: 'email', message: 'Invalid email format'};
  }

  if (!passwordRegex.test(password)) {
    console.log('Incorrect email and/or password');
    return {typeError: 'password', message: 'Incorrect email and/or password'};
  }

  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    console.log('User logged in successfully:', user);
    return user;
  } catch (error) {
    console.log('Log in error', error);
    switch (error.code) {
      case 'auth/invalid-email':
        return {typeError: 'email', message: 'That email address is invalid!'};
      case 'auth/wrong-password':
        return {typeError: 'password', message: 'Invalid password'};
    }
  }
};

export default handleLogIn;
