import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareButtonsConfig, SHARE_BUTTONS_CONFIG } from '@odilo/core';
import { ShareButtonModule } from '@odilo/button';

import { ShareButtons } from './share-buttons';
import { ExpandButton } from './expand-button';

@NgModule({
  declarations: [
    ShareButtons,
    ExpandButton
  ],
  imports: [
    ShareButtonModule,
    CommonModule
  ],
  exports: [
    ShareButtonModule,
    ShareButtons
  ]
})
export class ShareButtonsModule {
  static withConfig(config?: ShareButtonsConfig): ModuleWithProviders {
    return {
      ngModule: ShareButtonsModule,
      providers: [{provide: SHARE_BUTTONS_CONFIG, useValue: config}]
    };
  }
}
