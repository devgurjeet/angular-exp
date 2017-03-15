import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    
    public submitted: boolean; // keep track on whether form is submitted
    public Categories: any = [];
    
    public category:any    = {};
    public response: string;
    
    constructor(private _categoriesService: CategoriesService) {}

	ngOnInit() {
        this.getCategories();        
	}

    getCategories() {
        this._categoriesService.getCategories().subscribe(categories => {
            this.Categories = categories;
        });        
    }

    onSubmit() { 

        this._categoriesService.postCategories(this.category).subscribe(res => {
            this.response = res;
        });    

        this.submitted = true; 
        console.log(this.response);
        this.category = {};      

        /* Refresh the category list */
        this.getCategories();         
    }

    deleteCategory( categoryID ){
        console.log(  categoryID );

        this._categoriesService.deleteCategories( categoryID ).subscribe(res => {
            this.response = res;
        });    
        
        /* Refresh the category list */
        this.getCategories();               
    }

    /*Close success message*/
    closeMessage(){
        this.submitted = false;        
    }
}
