import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendapatanComponent } from './pendapatan/pendapatan.component';
import { PengeluaranComponent } from './pengeluaran/pengeluaran.component';

const routes: Routes = [
  {
    path: 'pengeluaran',
    component: PengeluaranComponent
  },
  {
    path: 'pendapatan',
    component: PendapatanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
