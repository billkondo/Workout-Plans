import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { Icon, Grid } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { useAuth } from 'hooks/auth';

const ProfileHome = () => {
  const { email } = useAuth();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Grid container direction="column">
          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <Icon fontSize="large">
                <AccountCircle></AccountCircle>
              </Icon>
            </Grid>

            <Grid item>
              <div className="header-font">{email}</div>
            </Grid>
          </Grid>
        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default ProfileHome;
