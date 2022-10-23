import { Component } from '@angular/core';
import {ItemService} from "../services/item.service";

@Component({
  selector: 'workspace-cart-entry',
  template: `
    <workspace-item-list [items]="items"></workspace-item-list>
  `,
})
export class RemoteEntryComponent {
  items: any[] = []

  constructor(private itemService: ItemService) {
    itemService.loadItems()
    itemService.items$.subscribe({
      next: items => {
        this.items = items
        console.log('next', items)
      },
      error: error => console.log(error),
      complete: () => console.log('Finished')
    })
  }

  ngOnInit() {
    console.log('Init')
  }
}
