import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showLogoutButton = false;

  LogoutButton() {
    this.showLogoutButton = !this.showLogoutButton;
  }

  logout() {
    console.log('Usuário saiu.');
  }

}
