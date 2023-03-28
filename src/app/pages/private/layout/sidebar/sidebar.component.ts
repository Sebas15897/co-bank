import { Component } from '@angular/core';
import { IMenu } from 'src/app/core/interfaces/menu.interface';
import { Menu } from '../menu.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sideMenu: IMenu[] = Menu;
}
