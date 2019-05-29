import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {

    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar conta'
  };

  private nameControl = new FormControl('',[Validators.required, Validators.minLength(3)]);
 

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get nome(): FormControl{
    return <FormControl>this.authForm.get('nome');
  }

  get email(): FormControl{
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl{
    return <FormControl>this.authForm.get('password');
  }

  changeAuthAction(){
    this.configs.isSignIn = !this.configs.isSignIn;
    const {isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Registrar-se';
    this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Já possuo uma conta';
    !isSignIn 
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  async onSubmit(provider: AuthProvider): Promise<void>{
    
    try{
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');

    } catch(e){
      console.log('Auth error: ', e);
    }
  } 

  

}
