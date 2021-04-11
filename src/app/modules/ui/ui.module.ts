import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { IconComponent } from './component/icon/icon.component';
import { MaterialModule } from './material.module';

const COMPONENTS = [ButtonComponent, IconComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class UiModule {}
