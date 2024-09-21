import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  progress: number = 0;
  isOffcanvasVisible: boolean = false;
  showSuccessNotification: boolean = false;
  intervalId: any;

  // Start migration process
  startMigration() {
    this.isOffcanvasVisible = true;
    this.progress = 0;
    this.showSuccessNotification = false;

    // Simulate the progress bar loading
    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        clearInterval(this.intervalId);
        this.hideOffcanvas();
        this.showSuccess();
      }
    }, 100); // Simulates 100% progress in 10 seconds
  }

  // Toggle the offcanvas display
  toggleOffcanvas() {
    this.isOffcanvasVisible = !this.isOffcanvasVisible;
  }

  // Hide offcanvas when migration is completed
  hideOffcanvas() {
    this.isOffcanvasVisible = false;
  }

  // Show success notification
  showSuccess() {
    this.showSuccessNotification = true;
    
    // Hide success notification after 3 seconds
    setTimeout(() => {
      this.showSuccessNotification = false;
    }, 3000);
  }
}



