import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/Server.Component'
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { KnkComponent } from './Knk/Knk.Component';
import { NaveenComponent } from './naveen/naveen.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    KnkComponent,
    NaveenComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropDownsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
