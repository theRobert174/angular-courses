import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '@shared/sideMenu/sideMenu.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SideMenuComponent
  ],
  templateUrl: './dashboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
