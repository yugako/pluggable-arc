import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter } from '@angular/router';
import {ApplicationRef} from "@angular/core";
import {AppComponent, appRoutes} from "@app";
import {PluginManagerService, PLUGINS_REGISTRY} from "@app-core";
import {PLUGINS_LIST} from "@app-plugins";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    PluginManagerService,
    {
      provide: PLUGINS_REGISTRY,
      useValue: PLUGINS_LIST
    },
  ],
}).then((app: ApplicationRef) => {
  const pluginManager: PluginManagerService = app.injector.get(PluginManagerService);

  pluginManager.initialize();

  pluginManager.resolveDefaultNavigation();
});
