import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo';
  form!: FormGroup;
  hide: boolean = false;
  constructor(private formBuild: FormBuilder,
    private loginService: LoginService){
this.createForm()
  }

  createForm():void{
    this.form = this.formBuild.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  registrar():void{

    this.loginService.registrar(this.form.value).subscribe(()=>{
      alert("REGISTRO CON ÉXITO")
    },()=>{
      alert("REGISTRO SIN ÉXITO")
    })
  }
  loguear():void{
    this.loginService.login(this.form.value).subscribe(()=>{
      alert("LOGIN CON ÉXITO")
    },()=>{
      alert("LOGIN SIN ÉXITO")
    })
  }
}
