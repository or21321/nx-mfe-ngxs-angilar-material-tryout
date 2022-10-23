import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'workspace-item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss']
})
export class ItemListComponent {
  @Input() items!: any[]


}
