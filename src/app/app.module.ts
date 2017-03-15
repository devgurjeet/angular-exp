import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories/categories.service';

import { DailyExpenseEntryComponent } from './daily-expense-entry/daily-expense-entry.component';
import { DailyExpenseEntryService } from './daily-expense-entry/daily-expense-entry.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  }, 
  {
    path: 'expenses',
    component: DailyExpenseEntryComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DailyExpenseEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,    
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CategoriesService,DailyExpenseEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
