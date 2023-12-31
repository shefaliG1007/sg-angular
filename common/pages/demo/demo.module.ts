import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: DemoComponent
  }
];

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
