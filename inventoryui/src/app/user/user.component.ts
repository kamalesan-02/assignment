import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  formData: any;
  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      username: new FormControl(""),
      dob: new FormControl(""),
      password: new FormControl(""),

      
    })
  }
  doRegistration(userInfo: any): void{
 this.userService.registerUser(userInfo).subscribe(res =>{
  console.log(res);
  alert("user create sucessfully!")
 },err =>{
  alert("user create failed");
 });
  }

}
