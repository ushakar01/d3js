import { Component, OnInit } from '@angular/core';
import { routes } from '../../../side-bar-routes';

@Component({
  selector: 'mtl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public navItems = routes;
  activePath: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
