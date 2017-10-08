import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoListPage} from "../pages/demo/list/demo-list";


const appRoutes: Routes = [
  {
    path: 'demoList',
    component: DemoListPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
