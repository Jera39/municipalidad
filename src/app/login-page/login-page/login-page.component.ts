import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  usuario: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    console.log("Algo");
  }

  login() {
    console.log(this.usuario);
    console.log(this.password);

    let bodyData = {
      email: this.usuario,
      password: this.password,
    };

    this.http.post("http://localhost:8085/api/login/authenticate", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.message == "Email not exits") {

        alert("Email not exits");


      }
      else if (resultData.message == "Login Success") {
        this.router.navigate(['mesa-partes-step1']);
      }
      else {
        alert("Incorrect Email and Password not match");
      }
    });
  }

  goToNewPwd(){

  }

  goToRegisterPage(){
    
  }

}
