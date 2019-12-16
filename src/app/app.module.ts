import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from '@odilo/buttons';
// import { ShareModule } from '@odilo/core';
import { AppComponent } from './app.component';
// import { ShareButtonModule } from '@odilo/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.withConfig({
      debug: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
