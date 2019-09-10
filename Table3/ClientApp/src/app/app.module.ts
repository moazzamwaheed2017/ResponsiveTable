import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxDatatableModule } from '../../projects/swimlane/ngx-datatable/src/public-api';
import { AppComponent } from './app.component';

import { ServerScrollingComponent } from './paging/scrolling-server.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,    
    ServerScrollingComponent   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
