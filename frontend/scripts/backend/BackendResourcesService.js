import module from './module';
import resources from './backendResources';

class BackendResourcesService {
  constructor () {
    this.tools = resources;
  }

  getBackendTools () {
    return this.tools;
  }

  getBackendTool (idx) {
    return this.tools[idx];
  }
}

module.service('BackendResourcesService', BackendResourcesService);
