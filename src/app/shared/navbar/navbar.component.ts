import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private auth: LoginService) {}

  logout() {
    this.auth.logoutUser();
  }
}
