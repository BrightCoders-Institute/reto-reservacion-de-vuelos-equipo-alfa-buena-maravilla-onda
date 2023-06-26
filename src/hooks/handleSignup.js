import auth from '@react-native-firebase/auth';

const handleSignup = async (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!emailRegex.test(email)) {
    console.log('Invalid email format');
    return 'Invalid email format';
  }

  if (!passwordRegex.test(password)) {
    console.log('Incorrect email and/or password');
    return 'Incorrect email and/or password';
  }

  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log('User registered successfully:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      return 'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      return 'That email address is invalid!';
    } else {
      console.log('Unknown error occurred:', error.message);
      return error.message;
    }
  }
};

export default handleSignup;
