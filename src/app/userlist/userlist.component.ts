import { Component, OnInit } from "@angular/core";
import { User } from "../User";
@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements OnInit {
  first_name: string;
  last_name: string;
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
    objHero.first_name = this.first_name;
    objHero.last_name = this.last_name;
    objHero.salary = this.salary;
    this.Users.push(objHero);
    localStorage.setItem("datasource", JSON.stringify(this.Users));
    this.first_name = "";
    this.last_name = "";
    this.salary = "";
  }
  Edit(user: User) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
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
    let objHero = new User();
    objHero.id = this.id;
    objHero.first_name = this.first_name;
    objHero.last_name = this.last_name;
    objHero.salary = this.salary;
    let getIndex = this.Users.findIndex((x) => x.id === this.editId);
    this.Users[getIndex] = objHero;
    this.isShowUpdate = false;
    this.isAddShow = true;
    this.first_name = "";
    this.last_name = "";
    this.salary = "";
  }
}
