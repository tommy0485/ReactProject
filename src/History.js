import React, { useEffect } from 'react';
import axios from 'axios';
import { db } from './index';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo

function History() {
  useEffect(() => {
    axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then(response => {
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
          <img src={logo} alt="Logo" className="logo" />
          <IonTitle className="IonTitle">History</IonTitle>
          <IonButton className="logout-button" slot="end">Logout</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/playlists" className="link">Playlists</Link>
          <Link to="/newartists" className="link">Discover Something New</Link>
          <Link to="/settings" className="link">Settings</Link>
        </div>
        <div className="content-center">
          <h2 className="subtitle">You have to listen to music before there's a song history. Start listening now!</h2>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default History;
