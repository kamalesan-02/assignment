import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService) { }

  username: string="";
  password: string="";
  incomplete: boolean = false;

  ngOnInit(): void {
  }
// function of submit
  doLogin(event: any): void {
    event.preventDefault();
   
    
    if(this.username && this.password) {
      //login
      this.incomplete = false;
      this.authService.login(this.username, this.password).subscribe((res) => {
        this.storageService.setItem("userInfo", res);
        window.location.reload();
      });
    } else {
      this.incomplete = true;
    }

  }
}


/**
 * Appp // Login // Home 
 * 
 * 
 * 
 */