import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [MatButtonModule, CommonModule, MatCardModule, ReactiveFormsModule, MatSidenavModule, MatRadioModule, FormsModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
