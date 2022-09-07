import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inventoryui';
  hasSession: boolean = false;
  constructor(private storageService: StorageService) {}
  
  ngOnInit() {
    const userInfo = this.storageService.getItemAsJSON("userInfo");
    if (userInfo.access_token) {
      this.hasSession = true;
    } else {
      this.hasSession = false;
    }
  }
}
