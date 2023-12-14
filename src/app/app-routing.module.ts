import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstant } from './constant/app.constant';

const routes: Routes = [
  { path: '', redirectTo: AppConstant.HOME_ROUTE_URL, pathMatch: 'full' },
  {
    path: AppConstant.HOME_ROUTE_URL,
    loadChildren: () =>
      import('./entry-point/entry-point.module').then(
        (m) => m.EntryPointModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
