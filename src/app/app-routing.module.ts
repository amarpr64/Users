import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { UserlistComponent } from "./userlist/userlist.component";
const routes: Routes = [
  { path: "about", component: AboutusComponent },
  { path: "", component: UserlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
