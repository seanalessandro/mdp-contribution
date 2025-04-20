import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SoftskillComponent } from "./softskill/softskill.component";
import { ContactComponent } from "./contact/contact.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContributionComponent } from "./contribution/contribution.component";
import { PreviousProjectsComponent } from "./previous-projects/previous-projects.component";
import { CommitteeExperienceComponent } from "./committee-experience/committee-experience.component";
import { BottombarComponent } from "./bottombar/bottombar.component";

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, HomeComponent, NavbarComponent, ContributionComponent, PreviousProjectsComponent, CommitteeExperienceComponent, BottombarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'self-profile-website';
}
