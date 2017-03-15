import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { DailyExpenseEntryService } from './daily-expense-entry.service';


@Component({
  selector: 'app-daily-expense-entry',
  templateUrl: './daily-expense-entry.component.html',
  styleUrls: ['./daily-expense-entry.component.css']
})
export class DailyExpenseEntryComponent implements OnInit {

    public submitted: boolean; // keep track on whether form is submitted
    public dailyExpenses: any = []; /*collection of objects from db. */
        
    public dailyExpense:any  = {}; /*Form object*/
    public response: string;
    
    constructor( private _dailyExpenseEntryService: DailyExpenseEntryService ) { }

    ngOnInit() {
        this.getAllExpenses();
    }

    getAllExpenses() {
        this._dailyExpenseEntryService.getExpenses().subscribe(dailyExpenses => {
            this.dailyExpenses = dailyExpenses;
        });        
    }   

    onSubmit() { 

        this.submitted = true; 
        
        console.log(this.dailyExpense);

        this._dailyExpenseEntryService.postExpenses(this.dailyExpense).subscribe(res => {
            this.response = res;
        });   

        this.dailyExpense = {};
        
        /*refresh the expense list */
        this.getAllExpenses();

    }

    deleteExpenses( expenseID ){
        
        this._dailyExpenseEntryService.deleteExpenses( expenseID ).subscribe(res => {
            this.response = res;
        });    
        
        /* Refresh the category list */
        this.getAllExpenses();               
    }


    /*Close success message*/
    closeMessage(){
        this.submitted = false;        
    }
}
