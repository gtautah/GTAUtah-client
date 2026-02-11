import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { MembershipComponent } from './components/membership/membership.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WorkInProgressComponent } from './components/shared/work-in-progress/work-in-progress.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leadership', component: WorkInProgressComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: LeadershipComponent },
  // {path: 'work-in-progress', component: WorkInProgressComponent},
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  {path: 'sponsors', component: WorkInProgressComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'membership', component: WorkInProgressComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
