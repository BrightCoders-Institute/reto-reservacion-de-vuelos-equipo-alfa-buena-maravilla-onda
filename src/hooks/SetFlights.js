import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const addFlightToFirestore = async flightData => {
  try {
    const user = auth().currentUser;
    if (user) {
      const flightsCollection = firestore().collection('flights');
      await flightsCollection.add({
        ...flightData,
        userId: user.uid,
      });
    }
  } catch (error) {
  }
};

export {addFlightToFirestore};
