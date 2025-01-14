import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './core/constants/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
    ]),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'zuu-makup-shop',
        appId: '1:13943401966:web:c944415f1aca6be35a32ff',
        databaseURL: 'https://zuu-makup-shop-default-rtdb.firebaseio.com',
        storageBucket: 'zuu-makup-shop.firebasestorage.app',
        apiKey: 'AIzaSyAR1vRlux6tvsqbsvsejQGpoJ9w7VxBlOE',
        authDomain: 'zuu-makup-shop.firebaseapp.com',
        messagingSenderId: '13943401966',
        measurementId: 'G-PW0KK53GE8',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
