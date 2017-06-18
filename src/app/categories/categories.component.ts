import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  prds: FirebaseListObservable<any[]>;

  constructor(public afAuth:AngularFireAuth,public af:AngularFireDatabase) {
    this.prds = af.list('/AllProduct');
  }

  ngOnInit() {
  }

}
