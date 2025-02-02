import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Pluggable, PLUGINS_REGISTRY} from "../models";

@Injectable({ providedIn: 'root' })
export class PluginManagerService {
  constructor(
    private router: Router,
    @Inject(PLUGINS_REGISTRY) private plugins: Pluggable[]
  ) {}

  public initialize (): void {
    this.plugins.forEach((plugin: Pluggable) => {
      if (plugin.routes) {
        this.router.resetConfig([
          ...this.router.config,
          ...plugin.routes
        ]);
      }

      plugin.load();
    });
  }

  public destroy(): void {
    return this.plugins.forEach((plugin: Pluggable) => {
      plugin.destroy();
    });
  }

  public resolveDefaultNavigation(): void {
    if (!(this.plugins.length > 0)) return;

    const [{routes}] = this.plugins;
    const [{path = '404'}] = routes ?? [];

    this.router.navigateByUrl(`/${path}`);
  }
}
