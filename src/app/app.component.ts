import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PluginManagerService} from "./services/plugin-manager.service";
import {PLUGINS_REGISTRY} from "./constants";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private pluginLoader: PluginManagerService) {}

  ngOnInit(): void {
    PLUGINS_REGISTRY.forEach(plugin => {
      this.pluginLoader.registerPlugin(new plugin());
    });
  }
}
