import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingPipeComponent } from './testing-pipe/testing-pipe.component';
import { SearchPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SearchEmployeePipe } from './pipes/search-employee.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestingPipeComponent,
    SearchPipe,
    HomeComponent,
    EmployeeCardComponent,
    AddComponent,
    DetailsComponent,
    SearchEmployeePipe,
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule
    
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
