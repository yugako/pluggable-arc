import {Pluggable} from "@app-core";
import {Plugin1Component} from "./plugin1.component";

export const Plugin1: Pluggable = {
  name: 'Plugin 1',
  routes: [{ path: 'plugin1', component: Plugin1Component }],
  load: () => console.log('Plugin 1 initialized!'),
  destroy: () => console.log('Plugin 1 destroyed!'),
};
