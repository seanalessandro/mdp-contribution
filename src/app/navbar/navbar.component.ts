import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isHidden = true;

  toHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
  toContribution() {
    document.getElementById("contribution")?.scrollIntoView({ behavior: 'smooth' });
  }
  toPreviousProjects() {
    document.getElementById("previous-projects")?.scrollIntoView({ behavior: 'smooth' });
  }
  toCommitteeExperience() {
    document.getElementById("committee-experience")?.scrollIntoView({ behavior: 'smooth' });
  }
  toggleMenu() {
    this.isHidden = !this.isHidden;
  }
}
