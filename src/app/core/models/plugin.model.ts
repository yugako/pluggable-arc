import { Routes } from '@angular/router';
import {InjectionToken} from "@angular/core";

export interface Pluggable {
  name: string;
  routes?: Routes;
  load(): void;
  destroy(): void;
}

export const PLUGINS_REGISTRY = new InjectionToken<Pluggable[]>('PLUGINS_REGISTRY');
