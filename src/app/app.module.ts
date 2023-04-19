import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiffmoduleRoutingModule } from './diffmodule/diffmodule-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomechildComponent } from './homechild/homechild.component';

@NgModule({
  declarations: [AppComponent, HomeComponentComponent, HomechildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiffmoduleRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
