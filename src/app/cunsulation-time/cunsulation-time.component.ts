import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'
import { IUserinfo, PaymentInfo } from '../payment-info.model'

@Component({
  selector: 'app-cunsulation-time',
  templateUrl: './cunsulation-time.component.html',
  styleUrls: ['./cunsulation-time.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CunsulationTimeComponent implements OnInit {
  
  userInfo: IUserinfo;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
   //  this.userInfo = new PaymentInfo();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login/:id']); 
  }

}
