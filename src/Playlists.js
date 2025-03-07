import React, { useEffect } from 'react';
import axios from 'axios';
import { db } from './index';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo
import playlist1 from './playlist1.png'; // Import the recommended artist image
import playlist2 from './playlist2.png'; // Import the new playlist image

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
          <Link to="/history" className="link">History</Link>
          <Link to="/newartists" className="link">Discover Something New</Link>
          <Link to="/settings" className="link">Settings</Link>
        </div>
        <div className="content-center">
          <div className="playlists-row">
            <div className="playlist">
              <h2 className="subtitle">Contemporary</h2>
              <div className="image-spot">
                <img src={playlist1} alt="Playlist 1" />
              </div>
            </div>
            <div className="playlist">
              <h2 className="subtitle">Jazz</h2>
              <div className="image-spot">
                <img src={playlist2} alt="Playlist 2" />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default Playlists;
