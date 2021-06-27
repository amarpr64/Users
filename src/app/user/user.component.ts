import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
    this.firstname ="";
    this.lastname = "";
    this.salary ="";
    this.id = 0;
    this.editId = 0;
    this.isShowUpdate = false;
    this.isAddShow = true;
    this.Users = [];
    
    let objUsers = localStorage.getItem("datasource");

    if (objUsers != null) {
      this.Users = JSON.parse(objUsers);
    }
  }

  ngOnInit(): void {}

  firstname: string ;
  lastname: string ;
  salary: string;
  id: number ;
  editId: number ;
  isShowUpdate: boolean;
  isAddShow: boolean ;
  Users: Array<User>;
 
  addUser() {
    this.id = this.id + 1;
    let objUser = new User();
    objUser.id = this.id;
    objUser.firstname = this.firstname;
    objUser.lastname = this.lastname;
    objUser.salary = this.salary;
    this.Users.push(objUser);
    localStorage.setItem("datasource", JSON.stringify(this.Users));
    this.firstname = "";
    this.lastname = "";
    this.salary = "";
  }
  Edit(user: User) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.salary = user.salary;
    this.isShowUpdate = true;
    this.isAddShow = false;
    this.editId = user.id;
  }

  Delete(index:any) {
    if (index !== -1) {
      this.Users.splice(index, 1);
      localStorage.setItem("datasource", JSON.stringify(this.Users));
    }
  }

  Update() {
    let objUser = new User();
    objUser.id = this.id;
    objUser.firstname = this.firstname;
    objUser.lastname = this.lastname;
    objUser.salary = this.salary;
    let getIndex = this.Users.findIndex((x) => x.id === this.editId);
    this.Users[getIndex] = objUser;
    this.isShowUpdate = false;
    this.isAddShow = true;
    this.firstname = "";
    this.lastname = "";
    this.salary = "";
  }
}
