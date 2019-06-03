import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { PerfilService } from 'src/app/perfil/services/perfil.service';

export abstract class Firestore<T extends {id: string}> {

    protected collection: AngularFirestoreCollection<T>;
    afAuth: AngularFireAuth;

    constructor (protected db: AngularFirestore){}

    protected setCollection(path: string, queryFn?: QueryFn): void{
        this.collection = path ? this.db.collection(path, queryFn) : null;
    }

    private setItem(item: T, operation: string): Promise<T>{

        return this.collection
        .doc<T>(item.id)
        [operation](item)
        .then(() => item);
    }

    getAll(): Observable<T[]>{
        return this.collection.valueChanges();
    }

    get(id: string): Observable<T>{
        return this.collection.doc<T>(id).valueChanges();
    }
    /*
    getPorAreas(email: string): Observable<T>{
        this.db.collection(`/perfil` );
        if(this.collection.doc<T>(email).valueChanges() != null && this.collection.doc<T>(email).valueChanges().perfil.email == email){
            return this.collection.doc<T>(email).valueChanges();
        }
    }
    */

    create (item: T, id: string): Promise<T>{
        
        item.id = id;
        return this.setItem(item, 'set');
    }

    update(item: T): Promise<T>{
        return this.setItem(item, 'update');
    }

    delete(item: T): Promise<void> {
        return this.collection.doc<T>(item.id). delete();
    }
}
