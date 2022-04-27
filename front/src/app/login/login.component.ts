import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  username="";
  password="";

  //constructor(private loginService: LoginService, private location: Location) { }


  //login(){
    //this.loginService.login(this.username,this.password).subscribe(data=>{
     // this.logged = true;
      //localStorage.setItem('token', data.token);
      //this.username="";
      //this.password="";
    //})
    //this.location.replaceState('');
  //}
  //logout(){
    //this.logged=false;
   // localStorage.removeItem("token");
   // this.location.replaceState('');
  //}

  ngOnInit(): void {
  }
  
}
