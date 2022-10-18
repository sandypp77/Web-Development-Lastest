import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './core/layouts/admin-content/admin-content.component';
import { JobListComponent } from './core/layouts/job-list/job-list.component';
import { WelcomeContentComponent } from './core/layouts/welcome-content/welcome-content.component';

const routes: Routes = [
  {
    path: 'tugas1',
    loadChildren: () => import('../app/module/tugas1/tugas1.module').then((x) => x.Tugas1Module)
  },
  {
    path: 'tugas2',
    loadChildren: () => import('../app/module/tugas2/tugas2.module').then((x) => x.Tugas2Module)
  },
  {
    path: 'tugas3',
    loadChildren: () => import('../app/module/tugas3/tugas3.module').then((x) => x.Tugas3Module)
  },
  {
    path: 'tugas4',
    loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  },
  {
    path: 'tugas5',
    children: [{
      path:  'forms',
      component: AdminContentComponent,
      loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
    },
    {
      path: '',
      loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
    },
    {
      path:  'welcome',
      component: WelcomeContentComponent,
      loadChildren: () => import('../app/module/welcome/welcome.module').then((x) => x.WelcomeModule)
    },
    {
      path:  'job-update',
      component: WelcomeContentComponent,
      loadChildren: () => import('../app/module/job-update/job-update.module').then((x) => x.JobUpdateModule)
    },
    {
      path:  'job-list',
      component: JobListComponent,
      loadChildren: () => import('../app/module/job-list/job-list.module').then((x) => x.JobListModule)
    },
    {
      path:  'profile',
      component: AdminContentComponent,
      loadChildren: () => import('../app/module/profile/profile.module').then((x) => x.ProfileModule)
    },
    {
      path:  'dashboard',
      component: AdminContentComponent,
      loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)
    },
    ]
  },
  {
    path: 'admin',
    children: [{
        path:  'forms',
        loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
      },
    ]
  },
  {
    path: '',
    loadChildren: () => import('../app/module/front/front.module').then((x) => x.FrontModule)
  },
  {
    path:  'dashboard',
    loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)
  },
  
  // {
  //   path: 'admin',
  //   loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule),
  // },
  // {
  //   path: 'admin/report',
  //   loadChildren: () => import('../app/module/admin/report/report.module').then((x) => x.ReportModule)
  // },
  // {
  //   path: 'form',
  //   loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  // },
  // {
  //   path: 'profile/update',
  //   loadChildren: () => import('../app/module/profile/update/update.module').then((x) => x.UpdateModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  // },
  // {
  //   path: 'admin',
  //   component: AdminContentComponent,
  //   loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  // },
  // {
  //   path: 'welcome',
  //   component: WelcomeComponent,
  //   loadChildren: () => import('../app/module/forms/forms.module').then((x) => x.FormsModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
