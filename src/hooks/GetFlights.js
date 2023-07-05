import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

//userId
const GetFlights = async () => {
  const currentUser = auth().currentUser;
  try{
    const flightsCollection = await firestore()
    .collection('flights')
    .where('userId', '==', currentUser.uid)
    .get();
    const flights = [];
    flightsCollection.forEach(documentSnapshot => {
      const flight = documentSnapshot.data();
      flights.push(flight);
    });
    console.log(flights);
    return flights;
  }
  catch(error){
    console.log(error);
    throw error;  
  }
};

export default GetFlights;
