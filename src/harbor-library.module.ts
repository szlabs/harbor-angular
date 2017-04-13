import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SYSTEMINFO_DIRECTIVES } from './system/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SYSTEMINFO_DIRECTIVES],
  exports: [SYSTEMINFO_DIRECTIVES]
})

export class HarborLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HarborLibraryModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: HarborLibraryModule,
      providers: []
    };
  }
}
