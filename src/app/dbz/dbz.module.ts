import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/mainPage.component';



@NgModule({
  declarations: [MainPageComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
