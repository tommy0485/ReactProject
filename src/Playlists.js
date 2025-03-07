import React, { useEffect } from 'react';
import axios from 'axios';
import { db } from './index';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo
import recommendedArtist from './recommended-artist.png'; // Import the recommended artist image

function Playlists() {
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
          <IonTitle className="IonTitle">Playlists</IonTitle>
          <IonButton className="logout-button" slot="end">Logout</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <button className="link">History</button>
          <button className="link">Discover Something New</button>
          <button className="link">Settings</button>
        </div>
        <div className="content-center">
          <h2 className="subtitle">My Playlists</h2>
          <div className="image-spot">
            <img src={recommendedArtist} alt="Recommended Artist" />
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default Playlists;
