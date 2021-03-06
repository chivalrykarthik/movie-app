import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './component/recommendation/recommendation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'my-recommendations', component: RecommendationComponent },
  {path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
