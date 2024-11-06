import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';
  sortAscending: boolean = true;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.filteredItems = this.items;
    });
  }

  filterItems() {
    this.filteredItems = this.items.filter(item => 
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  sortItems() {
    this.filteredItems.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return this.sortAscending ? -1 : 1;
      if (titleA > titleB) return this.sortAscending ? 1 : -1;
      return 0;
    });
  }

  toggleSort() {
    this.sortAscending = !this.sortAscending;
    this.sortItems();
  }
}
