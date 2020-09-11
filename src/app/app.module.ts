import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileHostDirective } from './profile/profile-host.directive';
import { ProfileComponent } from './profile/profile.component';
import { GuestCardComponent } from './profile/guest-card/guest-card.component';
import { UserCardComponent } from './profile/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, ProfileHostDirective, ProfileComponent,GuestCardComponent,UserCardComponent],
  entryComponents: [GuestCardComponent,UserCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule {}