import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user Loader works!</p>`,
  styleUrl: './usersLoader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoaderComponent { }
