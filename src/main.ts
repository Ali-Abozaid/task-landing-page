import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('Error bootstrapping application:', err);
    // Display error message in case of bootstrap failure
    document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Application Error</h1><p>Failed to load the application. Please check the console for details.</p></div>';
  });
