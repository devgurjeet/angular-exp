import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

    constructor(private http: Http) { }

    getCategories(){
        return this.http.get('/api/Categories').map(res => res.json());
    }

    postCategories( category ){
    	
    	let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let body = JSON.stringify(category);
		
    	return this.http.post('/api/Categories', category, headers).map((res) => res.json());
        
    }

}
