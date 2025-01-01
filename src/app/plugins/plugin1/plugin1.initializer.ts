import {Routes} from "@angular/router";
import {Pluggable} from "../../models";

export class Plugin1 implements Pluggable {
  name = 'Plugin 1';

  routes: Routes = [{ path: 'plugin1', loadComponent: () =>
      import('./plugin1.component').then((m) => m.Plugin1Component), }];

  load(): void {
    console.log(`${this.name} loaded`);
  }
}
