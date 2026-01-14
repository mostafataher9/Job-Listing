import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { EnvironmentProviders } from '@angular/core';


bootstrapApplication(App, appConfig, { providers:  [ provideHttpClient(), // for HttpClient 
                                               provideRouter([]), // for routing
                                             ]})
  .catch((err) => console.error(err));


  