import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AccessService } from '../../../services/access.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Login } from '../../../interfaces/Login';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button' 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: AccessService, private router: Router){}

  public formBuild = inject(FormBuilder)

  public formLogin: FormGroup = this.formBuild.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })

  login() {
    if(this.formLogin.invalid)return;
    const loginData:Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }

    this.http.loginUser(loginData).subscribe({
      next:(data) => {
        this.router.navigate(['inicio'])
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
}
