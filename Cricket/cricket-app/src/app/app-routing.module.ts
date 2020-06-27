import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'detail', component: DetailComponent}
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
