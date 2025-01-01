import {Pluggable} from "../../models/plugin.model";
import {Routes} from "@angular/router";
import {Plugin2Component} from "./plugin2.component";

export class Plugin2 implements Pluggable {
  name = 'Plugin 2';

  routes: Routes = [{ path: 'plugin2', component: Plugin2Component }];

  load(): void {
    console.log(`${this.name} loaded`);
  }
}
