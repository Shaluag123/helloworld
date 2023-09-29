import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestObjectComponentComponent } from './test-object-component/TestObjectComponentComponent';
import { TestArrayComponent } from './test-array/test-array.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { ListComponent } from './list/list.component';
import { FunctionComponent } from './function/function.component';

@NgModule({
  declarations: [
    AppComponent,
    TestObjectComponentComponent,
    TestArrayComponent,
    CardComponent,
    HeaderComponent,
    TableComponent,
    ListComponent,
    FunctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
