import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule, FormsModule, MaterialModule],
  exports: [TranslateModule, FormsModule, MaterialModule]
})
export class SharedModule { }
