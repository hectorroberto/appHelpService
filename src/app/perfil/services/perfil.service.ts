import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Perfil } from '../Models/perfil.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends Firestore<Perfil>{

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(perfil => {
      if (perfil) {
        
        // this.setCollection('/perfils/${perfil.uid}/Perfil')
        

        this.setCollection(`/user`);
        return;
      }
      this.setCollection(null);
    });
  }

  setNovaCollection(path: string){
    this.setCollection(``+path);
  }
}
