import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  cates: FirebaseListObservable<any[]>;

  suppliers: FirebaseListObservable<any[]>;

  constructor(public afAuth:AngularFireAuth,public af:AngularFireDatabase) {
    this.cates = af.list('/ProductCategory');
    this.suppliers = af.list('/Supplers');
  }

  ngOnInit() {
  }

}
