import auth from '@react-native-firebase/auth';

const handleSignup = async (firstName, email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }

  if (!passwordRegex.test(password)) {
    return 'Incorrect email and/or password';
  }

  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    if (error.code === 'auth/email-already-in-use') {
     return'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      return ('That email address is invalid!');
    }
  }
};

export default handleSignup;
