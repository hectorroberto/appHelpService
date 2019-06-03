import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User, AuthProvider } from 'src/app/core/services/auth.types';
import { AreasService } from 'src/app/areas/services/areas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  user = {} as User;

  authProviders = AuthProvider;

  configs = {

    isSignIn: false,
    action: 'Login',
    actionChange: 'Criar conta'
  };

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private areasService: AreasService,
  ) { }

  

  


  ngOnInit() {
    
  }

  /*async onSubmit(provider: AuthProvider): Promise<void>{
    
    try{
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.registerForm.value,
        provider
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
    } catch(e){
      console.log('Auth error: ', e);
    }
  }*/

  async goRegisterPage(provider: AuthProvider): Promise<void> {
    //this.authService.criarConta(this.user);
    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.user,
        provider
      });
      this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/about');
    } catch (e) {
      console.log('Auth error: ', e);
    }
  }
  /*try {
    this.authService.logar(this.user);
    this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/areas');
  } catch (e) {
    console.log('Auth error: ', e);
  }
  */
}














