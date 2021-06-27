import { Component, OnInit } from '@angular/core';
import { User } from "../User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
    this.firstname ="";
    this.lastname = "";
    this.salary =0;
    this.id = 0;
    this.editId = 0;
    this.isUpdateUser = false;
    this.isAddUser = true;
    this.Users = [];
    
    let objUsers = localStorage.getItem("datasource");

    if (objUsers != null) {
      this.Users = JSON.parse(objUsers);
    }
  }

  ngOnInit(): void {}

  firstname: string ;
  lastname: string ;
  salary: number;
  id: number ;
  editId: number ;
  isUpdateUser: boolean;
  isAddUser: boolean ;
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
    this.salary = 0;
  }
  Edit(user: User) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.salary = user.salary;
    this.isUpdateUser = true;
    this.isAddUser = false;
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
    this.isUpdateUser = false;
    this.isAddUser = true;
    this.firstname = "";
    this.lastname = "";
    this.salary = 0;
  }
}
