import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { MembershipComponent } from './components/membership/membership.component';
import { FormsModule } from '@angular/forms';
import { LeadershipComponent } from './components/leadership/leadership.component'; 
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SportsComponent,
    ContactComponent,
    EventsComponent,
    MembershipComponent,
    LeadershipComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FooterComponent,
    CalendarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
