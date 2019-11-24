import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding" id="home-page">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
        <IonRouterLink href="/login">Logar</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
