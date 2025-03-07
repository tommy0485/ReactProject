import React, { useEffect } from 'react';
import axios from 'axios';
import { db } from './index';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo
import newArtist1 from './newArtist1.png'; // Import the first new artist image
import newArtist2 from './newArtist2.png'; // Import the second new artist image

function NewArtists() {
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
          <IonTitle className="IonTitle">New Artists</IonTitle>
          <IonButton className="logout-button" slot="end">Logout</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/playlists" className="link">Playlists</Link>
          <Link to="/history" className="link">History</Link>
          <Link to="/settings" className="link">Settings</Link>
        </div>
        <div className="content-center">
          <div className="playlists-row">
            <div className="playlist">
              <h2 className="subtitle">New Artist 1</h2>
              <div className="image-spot">
                <img src={newArtist1} alt="New Artist 1" />
              </div>
            </div>
            <div className="playlist">
              <h2 className="subtitle">New Artist 2</h2>
              <div className="image-spot">
                <img src={newArtist2} alt="New Artist 2" />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default NewArtists;
