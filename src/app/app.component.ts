import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ingresoEgreso';

  constructor(
    public _authService: AuthService
  ){
    
  }

  ngOnInit(){
    this._authService.initAuthListener();
  }

}
