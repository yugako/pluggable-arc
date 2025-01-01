import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pluggable } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PluginManagerService {
  private plugins: Pluggable[] = [];

  constructor(private router: Router) {}

  public registerPlugin(plugin: Pluggable): void {
    this.plugins.push(plugin);

    if (plugin.routes) {
      this.router.resetConfig([...this.router.config, ...plugin.routes]);
    }

    plugin.load();
  }

  public getPlugins(): Pluggable[] {
    return this.plugins;
  }

  public unregister(pluginName: string): void {
    this.plugins = this.plugins.filter((plugin) => plugin.name !== pluginName);
    this.router.resetConfig(this.router.config.filter((route) => !route.path?.startsWith(pluginName)));
  }
}
