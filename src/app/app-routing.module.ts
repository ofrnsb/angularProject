import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomechildComponent } from './homechild/homechild.component';

//set the path to the component
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent,
    children: [
      // add the children
      { path: 'homechild', component: HomechildComponent },

      // add path parameter to the children's path
      { path: 'homechild/:id', component: HomechildComponent },
    ],
  },
  // lazy loading
  {
    path: 'diffmodule',
    loadChildren: () =>
      import('./diffmodule/diffmodule.module').then((m) => m.DiffmoduleModule),
  },
  {
    path: 'standalone',
    loadComponent: () =>
      import('./standalone/standalone.component').then(
        (m) => m.StandaloneComponent
      ),
  },
  // for 404 page
  // { path: '**', component: HomeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
