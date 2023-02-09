import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuditDataComponent } from './audit-data/audit-data.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AuditDataComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
    ],
    exports:[
      AuditDataComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
