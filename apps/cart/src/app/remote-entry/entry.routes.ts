import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {AppComponent} from "../app.component";

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, children: [
      {path:'app', component: AppComponent}
    ] },
];
