

        import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

// SOCKETS
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment.dev';

// esto e
const config: SocketIoConfig =
  {
    url: environment.webSocketUrl, options: {}
  };


@NgModule(
  {
    declarations:
      [
        AppComponent
      ],

    imports:
      [
        AppRoutingModule,
        BrowserModule,
        SocketIoModule.forRoot(config),
      ],

    providers: [],
    bootstrap: [AppComponent]
  })


export class AppModule { }

