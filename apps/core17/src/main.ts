import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment, getApiBase } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  fetch(getApiBase(environment.production) + '/config').then((serverResponse) =>
    serverResponse.json().then((data) => {
      const responseData: { serverTick: number } = data;
      platformBrowserDynamic([
        { provide: 'serverTick', useValue: responseData.serverTick },
      ])
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
    })
  );
});
