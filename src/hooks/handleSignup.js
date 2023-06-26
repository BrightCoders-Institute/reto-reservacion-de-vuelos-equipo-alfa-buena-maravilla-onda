import auth from '@react-native-firebase/auth';

const handleSignup = async (firstName, email, password) => {
  const nameRegex= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!nameRegex.test(firstName.trim()) && firstName.trim().length === 0){
    console.log('Invalid name');
    return {typeError: 'string', message:'Field can not be empty or invalid name'}
  }

  if (!emailRegex.test(email)) {
    console.log('Invalid email format');
    return {typeError:'email',message:'Invalid email format'};
  }

  if (!passwordRegex.test(password)) {
    console.log('Incorrect email and/or password');
    return {typeError:'password', message:'Incorrect email and/or password'};
  }

  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    await user.updateProfile({displayName: firstName});
    console.log('User registered successfully:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      return {typeError: 'email', message:'That email address is already in use!'};
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      return {typeError:'email',message:'That email address is invalid!'};
    } else {
      console.log('Unknown error occurred:', error.message);
      return error.message;
    }
  }
};

export default handleSignup;
