import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  textValues: string[] = ['adaptive', 'innovative', 'a hardworker', 'a fast learner', 'a team player'];
  currentText: string = this.textValues[0];
  private intervalId: any;
  myselfImagePath: string = 'assets/images/myself_bnw.png'; // Path to your image

  ngOnInit(): void {
    let index = 0;
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.textValues.length;
      this.currentText = this.textValues[index];
    }, 1000); // Change text every 1 second
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval when component is destroyed
    }
  }
}
