import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingExampleCompComponent } from './cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoolJobComponent } from './cool-job/cool-job.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingExampleCompComponent,
    CoolJobComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
