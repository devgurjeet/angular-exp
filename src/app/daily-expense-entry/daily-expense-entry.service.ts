import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DailyExpenseEntryService {

  constructor(private _http: Http) { }

 	 getExpenses(){
        return this._http.get('/api/expenses').map(res => res.json());
    }

    postExpenses( dailyExpense ){
    	
    	let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
    	return this._http.post('/api/expenses', dailyExpense, headers).map((res) => res.json());        
    }

    deleteExpenses( expenseID ){
    	return this._http.delete('/api/expenses/'+expenseID).map((res) => res.json());        
    }    
}
