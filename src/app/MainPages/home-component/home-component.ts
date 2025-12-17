import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Layouts/navbar-component/navbar-component';
import { FooterComponent } from '../../Layouts/footer-component/footer-component';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  isIsoAt50 = false;
  private animationInterval: any;

  ngOnInit() {
    // Start the animation cycle
    this.startAnimationCycle();
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private startAnimationCycle() {
    // Set up interval to toggle the ISO at 50% state
    // The animation is 4 seconds, so we toggle every 2 seconds (at 50%)
    // and then turn off after a brief period
    this.animationInterval = setInterval(() => {
      // Set to true (ISO at 50%)
      this.isIsoAt50 = true;
      
      // After 1 second (when animation passes the 50% mark), set to false
      setTimeout(() => {
        this.isIsoAt50 = false;
      }, 1000);
    }, 4000); // Full animation cycle
  }

  // Optional: Manual trigger for testing
  triggerIsoAnimation() {
    this.isIsoAt50 = true;
    setTimeout(() => {
      this.isIsoAt50 = false;
    }, 1000);
  }
}