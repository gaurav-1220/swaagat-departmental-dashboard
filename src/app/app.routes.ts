import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
