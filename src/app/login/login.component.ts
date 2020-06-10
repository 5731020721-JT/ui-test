import { Component, OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IUserinfo, PaymentInfo } from '../payment-info.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [
    'input::placeholder {color: red; } ::-webkit-input-placeholder { color: pink;} ::-moz-placeholder { color: pink; } :-ms-input-placeholder { color: pink; } :-moz-placeholder {  color: pink;} '
  ]
})
export class LoginComponent implements OnInit {
  user: IUserinfo;
  person: IUserinfo; 
  otp: Number;
  showOtpComponent = true;
  returnUrl: string;
  id: string;
  loading = false;
  error= '';
  private sub: any;
  constructor(private route: ActivatedRoute,private router: Router,private GetuserInfo : LoginService) { 
    if (this.GetuserInfo.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }



  ngOnInit() {

     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
     this.route.params.subscribe(params => {
      
      this.id = params['id']; 
      console.log(this.id)
     this.GetuserInfo.getUser(this.id).pipe(first()).subscribe(data => {
           console.log(data)
           if(data == null){
               this.error = 'Transaction ID is not found';
               this.loading = false;
               return
           }else{
             
              this.setUser(data);
              
           }
    
   })
  })
 }

  getLogin(otp){
     if(this.user.PasscodePin != otp){
        this.error = 'Your PIN is invalid';
        this.loading = false;
        return
     }else{
        this.router.navigate([this.returnUrl]);
     }
  }


  setUser(user){
   this.user = user;
   this.person = new PaymentInfo();
   console.log(this.person);
  }


  @ViewChild('ngOtpInput') ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 8,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '•'
  };
  
  onOtpChange(otp) {
    this.otp = otp;
    if(otp.length == 8){
      this.loading = true;
      this.getLogin(otp)
    }else{
      this.error = '';
    }
  }

  setVal(val) {
    this.ngOtpInput.setValue(val);
  }
  

}
