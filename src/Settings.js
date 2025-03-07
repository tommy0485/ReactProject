import React, { useState } from 'react';
import { IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonLabel, IonCheckbox } from '@ionic/react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo

function Settings() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <img src={logo} alt="Logo" className="logo" />
          <IonTitle className="IonTitle">Settings</IonTitle>
          <IonButton className="logout-button" slot="end">Logout</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/playlists" className="link">Playlists</Link>
          <Link to="/history" className="link">History</Link>
          <Link to="/newartists" className="link">Discover Something New</Link>
        </div>
        <div className="content-center">
          <h2 className="subtitle">Notification Preferences</h2>
          <div className="checkbox-row">
            <div className="checkbox-item">
              <IonLabel className="large-label">Email</IonLabel>
              <IonCheckbox checked={checkbox1} onIonChange={e => setCheckbox1(e.detail.checked)} />
            </div>
            <div className="checkbox-item">
              <IonLabel className="large-label">Text</IonLabel>
              <IonCheckbox checked={checkbox2} onIonChange={e => setCheckbox2(e.detail.checked)} />
            </div>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default Settings;
