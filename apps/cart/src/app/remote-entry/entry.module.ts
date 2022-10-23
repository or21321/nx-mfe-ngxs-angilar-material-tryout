import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ItemListComponent} from "../components/item-list/item-list.component";
import {ItemPreviewComponent} from "../components/item-preview/item-preview.component";

import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, ItemListComponent,ItemPreviewComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
