import { Component, OnInit } from "@angular/core";
import { User } from "../User";
@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements OnInit {
  firstname: string;
  lastname: string;
  salary: string;
  id: number = 0;
  editId: number;
  isShowUpdate: boolean = false;
  isAddShow: boolean = true;
  constructor() {
    let objUsers = localStorage.getItem("datasource");

    if (objUsers != null) {
      this.Users = JSON.parse(objUsers);
    }
  }

  ngOnInit(): void {}
  Users: Array<User> = [];
  addUser() {
    this.id = this.id + 1;
    let objHero = new User();
    objHero.id = this.id;
    objHero.first_name = this.firstname;
    objHero.last_name = this.lastname;
    objHero.salary = this.salary;
    this.Users.push(objHero);
    localStorage.setItem("datasource", JSON.stringify(this.Users));
    this.firstname = "";
    this.lastname = "";
    this.salary = "";
  }
  Edit(user: User) {
    this.firstname = user.first_name;
    this.lastname = user.last_name;
    this.salary = user.salary;
    this.isShowUpdate = true;
    this.isAddShow = false;
    this.editId = user.id;
  }

  Delete(index) {
    if (index !== -1) {
      this.Users.splice(index, 1);
      localStorage.setItem("datasource", JSON.stringify(this.Users));
    }
  }

  Update() {
    let obj = new User();
    obj.id = this.id;
    obj.first_name = this.firstname;
    obj.last_name = this.lastname;
    obj.salary = this.salary;
    let getIndex = this.Users.findIndex((x) => x.id === this.editId);
    this.Users[getIndex] = obj;
    this.isShowUpdate = false;
    this.isAddShow = true;
    this.firstname = "";
    this.lastname = "";
    this.salary = "";
  }
}
