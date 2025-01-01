import { Routes } from '@angular/router';

export interface Pluggable {
  name: string;
  routes?: Routes;
  load(): void
}
