import { useState, useEffect } from 'react';

const UseFormState = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [subscribeChecked, setSubscribeChecked] = useState(false);
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const checkButtonEnabled = () => {
    if (termsChecked && subscribeChecked) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  };

  useEffect(() => {
    checkButtonEnabled();
  }, [termsChecked, subscribeChecked]);

  return {
    firstName,
    setFirstName,
    email,
    setEmail,
    password,
    setPassword,
    termsChecked,
    setTermsChecked,
    subscribeChecked,
    setSubscribeChecked,
    isButtonEnabled,
  };
};

export default UseFormState;