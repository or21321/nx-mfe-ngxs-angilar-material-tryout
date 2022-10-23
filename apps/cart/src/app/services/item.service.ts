import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {UtilService} from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //mock the server
  private _itemsDb: any[] = []

  private _items$ = new BehaviorSubject<any>([])
  public items$ = this._items$.asObservable()

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public loadItems(): void {
    const itemsFromStorage = this.utilService.loadFromStorage('itemsDb')

    if (itemsFromStorage) {
      this._itemsDb = itemsFromStorage
      this._sendItems(this._itemsDb)
    } else {
      this._getMockItems()
    }
  }

  private _sendItems(items: any) {
    this._items$.next(items)
  }

  private _getMockItems() {
  this._itemsDb = [
    {name:' Or',
      _id: 1,
    },
    {name:' Ben',
      _id: 2,
    },
    {name:' Shay',
      _id: 3,
    },
    {name:' Orna',
      _id: 4,
    },
    {name:' Yaron',
      _id: 5,
    }
  ]
    this._sendItems(this._itemsDb)
    this._saveItemsToStorage()
  }

  private _saveItemsToStorage() {
    this.utilService.saveToStorage('itemsDb', this._items$.getValue())
  }

}
