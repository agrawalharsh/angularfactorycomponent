import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { UserCardComponent } from './profile/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestCardComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
