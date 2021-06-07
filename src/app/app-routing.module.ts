import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';

const routes: Routes = [
  {
    path: 'converter',
    component: TempConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
