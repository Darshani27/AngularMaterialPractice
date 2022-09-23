import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-first-crud',
  templateUrl: './first-crud.component.html',
  styleUrls: ['./first-crud.component.css']
})
export class FirstCrudComponent implements OnInit {
  data:any[]=[];
  constructor(private db :AngularFireDatabase) { }

  ngOnInit(): void {
    const ref=this.db.list('items');
    ref.valueChanges().subscribe((res)=>{
      this.data=res;
    })
  }

    saveData(email : string)
    {
      // const data={email:email,pwd:pwd};
      const ref=this.db.list('items');
      ref.push(email).then((res)=>{
        console.log(email);
      },
      (err)=>{
        alert(err.message);
      });
    }
}
