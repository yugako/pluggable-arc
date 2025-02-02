import {Pluggable} from "../../core/models";
import {Plugin2Component} from "./plugin2.component";

export const Plugin2: Pluggable = {
  name: 'Plugin 2',
  routes: [{ path: 'plugin2', component: Plugin2Component }],
  load: () => console.log('Plugin 2 initialized!'),
  destroy: () => console.log('Plugin 2 destroyed!'),
};
