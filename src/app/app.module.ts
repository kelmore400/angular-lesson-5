import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnorderedListComponent } from './appunordered-list/unordered-list/unordered-list.component';
import { ListItemComponent } from './appunordered-list/list-item/list-item.component';
import { AppunorderedListComponent } from './appunordered-list/appunordered-list.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardBlockComponent } from './cards-container/card-block/card-block.component';
import { ListItemContentComponent } from './appunordered-list/list-item-content/list-item-content.component';

@NgModule({
  declarations: [
    AppComponent,
    UnorderedListComponent,
    ListItemComponent,
    AppunorderedListComponent,
    CardsContainerComponent,
    CardBlockComponent,
    ListItemContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
