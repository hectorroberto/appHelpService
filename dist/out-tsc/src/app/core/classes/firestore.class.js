var Firestore = /** @class */ (function () {
    function Firestore(db) {
        this.db = db;
    }
    Firestore.prototype.setCollection = function (path, queryFn) {
        this.collection = path ? this.db.collection(path, queryFn) : null;
    };
    Firestore.prototype.setItem = function (item, operation) {
        return this.collection
            .doc(item.id)[operation](item)
            .then(function () { return item; });
    };
    Firestore.prototype.getAll = function () {
        return this.collection.valueChanges();
    };
    Firestore.prototype.get = function (id) {
        return this.collection.doc(id).valueChanges();
    };
    /*
    getPorAreas(email: string): Observable<T>{
        this.db.collection(`/perfil` );
        if(this.collection.doc<T>(email).valueChanges() != null && this.collection.doc<T>(email).valueChanges().perfil.email == email){
            return this.collection.doc<T>(email).valueChanges();
        }
    }
    */
    Firestore.prototype.create = function (item, id) {
        item.id = id;
        return this.setItem(item, 'set');
    };
    Firestore.prototype.update = function (item) {
        return this.setItem(item, 'update');
    };
    Firestore.prototype.delete = function (item) {
        return this.collection.doc(item.id).delete();
    };
    return Firestore;
}());
export { Firestore };
//# sourceMappingURL=firestore.class.js.map