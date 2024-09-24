import React from 'react'
import EasebuzzCheckout from 'react-native-easebuzz-kit';
import { Button } from 'react-native';



function App() {


  const openEz = () => {
        EasebuzzCheckout.open({
          access_key: '98010370ada6e011ca3918d81f68dfe47c95d187120653be717545f4c6505d5a',
          pay_mode: "production"
        }).then((data) => {
          console.log("Payment Response:", data);
        }).catch((error) => {
          console.log(error);
        });
  }
  return (
    <Button onPress={openEz} title='Pay' />
  )
}

export default App