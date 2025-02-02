import {Plugin2} from "./plugin2/plugin2.initializer";
import {Plugin1} from "./plugin1/plugin1.initializer";
import {Pluggable} from "../core/models";

export const PLUGINS_LIST: Pluggable[] = [
  Plugin1,
  Plugin2
]
