import { HttpClient } from '@angular/common/http';
import { BackendapiService } from './../../services/backendapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    item: any;
    itemOne: any;
    items: any;
    selectedCategory: any = '';
    filteredItems: any[] = [];

    constructor(private route: ActivatedRoute, private BackendapiService: BackendapiService, 
        private router: Router, private http: HttpClient) { }

    ngOnInit() {
        this.fetchItems();

    }

    fetchItems() {
        this.BackendapiService.getAllProducts()
        .subscribe(res => {
            this.itemOne = res;
            this.items = this.itemOne.data;
            this.selectedCategory = '';
        });
    }

    // filterItems() {
    //     if (this.selectedCategory) {
    //         this.filteredItems = [...this.items.filter(item: { category: { name: string | any[];}; }) => this.item.category.name.includes(this.selectedCategory)];
    //     }else{
    //         this.filteredItems - this.items;
    //     }
    // }

    viewProduct(id: number) {
        this.router.navigate(['/viewProduct' + id]);
    }

}
