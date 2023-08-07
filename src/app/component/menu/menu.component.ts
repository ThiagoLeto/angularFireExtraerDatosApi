import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public data:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpClient: HttpClient
  ) {}


  ngOnInit(): void { this.dataAPI().subscribe( d=>{console.log(d);this.data=d;
  } );
   }
  onClick() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch(error => console.log(error));
  }
  dataAPI(){
    const apiURL:string = 'https://apis.datos.gob.ar/series/api/series/?ids=168.1_T_CAMBIOR_D_0_0_26&start_date=2023-01-01&end_date=2023-08-06&format=json'
    //this.httpClient.get(apiURL).
    return this.httpClient.get(apiURL);
    
  }

}
