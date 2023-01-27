import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



const modules=[MatButtonModule,MatIconModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule],
    exports:[modules]
})
export class MatModule { }
