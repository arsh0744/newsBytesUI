import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUrlComponent } from './components/add-url/add-url.component';
import { HistoryComponent } from './components/history/history.component';



const Routing : Routes = 
[
  {
    path: '',pathMatch : 'full',redirectTo:'dashboard'
  },
  {
    path: 'dashboard',component :DashboardComponent 
  },
  {
    path: 'addUrl',component :AddUrlComponent
  },
  {
    path: 'history',component :HistoryComponent
  },
  {
    path: '*',component :DashboardComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(Routing)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
