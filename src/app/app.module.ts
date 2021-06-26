import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
//import {HeroesComponent} from "./heroes/heroes.component"
@NgModule({
  declarations: [AppComponent, UserlistComponent, AboutusComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
