import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDrawerMode} from "@angular/material/sidenav";
import {Select, Store} from "@ngxs/store";
import {AddAnimal} from "./store/animal.actions";
import {log} from "util";
import {Observable, withLatestFrom} from "rxjs";
import {ZooStateModel} from "./store/animal.state";

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  // @Select((state: ZooStateModel) => state.animals) animals$!: Observable<any>
  animals$: Observable<any[]>
  title = 'shell';
  mode = new FormControl('over' as MatDrawerMode)
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  shouldRun = true
  @ViewChild('sidenav') sidenavRef!: ElementRef<HTMLElement>

  constructor(private store: Store) {
    this.animals$ = this.store.select(state => state.zoo.animals);
  }

  ngOnInit() {
    this.animals$.subscribe({
      next: (animals) => console.log('animals from observable', animals)
    })
  }

  toggleSideNav() {
    console.log('toggleSideNav()', this.sidenavRef);
    (this.sidenavRef as any).toggle();
  }


  addAnimal() {
    this.store
      .dispatch(new AddAnimal({name:'NEW', _id: 5}))
      .pipe(withLatestFrom(this.animals$))
      .subscribe(([_, animals]) => {
        // do something with animals
        console.log('animals', animals)
        console.log(this.store.snapshot())
      });
  }
}
