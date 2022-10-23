import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'workspace-side-nav',
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.scss'],
})
export class SideNavComponent {
  mode = new FormControl('side' as MatDrawerMode)
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  shouldRun = true
  @ViewChild('sidenav') sidenavRef!: ElementRef<HTMLElement>

  toggleSideNav() {
    console.log('toggleSideNav()', this.sidenavRef);
    (this.sidenavRef as any).toggle();
  }
}
