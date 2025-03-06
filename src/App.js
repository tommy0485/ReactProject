import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { db } from './index';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/react';
import './App.css'; // Import the CSS file

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then(response => {
        setData(response.data);
        // Optionally store data in Firestore
        db.collection("facts").doc("wVxqRwCoIVoDsMqWGqHeHe").set({
          current: response.data,
        });
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="IonTitle">Welcome to Your Music Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data ? <p>{data[0]}</p> : <p>Loading...</p>}
      </IonContent>
    </IonApp>
  );
}

export default App;
