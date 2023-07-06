import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GetFlights = async () => {
  const currentUser = auth().currentUser;
  try {
    const flightsCollection = await firestore()
      .collection('flights')
      .where('userId', '==', currentUser.uid)
      .get();
    const flights = [];
    flightsCollection.forEach(documentSnapshot => {
      const flight = documentSnapshot.data();
      flights.push(flight);
    });
    return flights;
  } catch (error) {
    throw error;
  }
};

export default GetFlights;
