import React from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { settings } from 'ionicons/icons';
import { Icon, Grid } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import routes from 'config/routes';

import { useAuth } from 'hooks/auth';

const ProfileHome = () => {
  const { email } = useAuth();

  return (
    <IonPage>
      <IonContent>
        <Grid container direction="column">
          <Grid
            item
            container
            spacing={1}
            alignItems="center"
            className="ion-padding"
          >
            <Grid item>
              <Icon fontSize="large">
                <AccountCircle></AccountCircle>
              </Icon>
            </Grid>

            <Grid item>
              <div className="header-font">{email}</div>
            </Grid>
          </Grid>

          <Grid item>
            <IonItem
              detail
              routerDirection="forward"
              routerLink={routes.profile.settings}
            >
              <IonIcon icon={settings}></IonIcon>
              <IonLabel style={{ paddingLeft: 16 }}>Configurações</IonLabel>
            </IonItem>
          </Grid>
        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default ProfileHome;
