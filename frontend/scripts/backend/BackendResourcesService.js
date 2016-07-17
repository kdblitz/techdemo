import module from './module';
import resources from './backendResources';

class BackendResourcesService {
  constructor () {
    this.tools = resources;
  }

  getBackendTools () {
    return this.tools;
  }
}

module.service('BackendResourcesService', BackendResourcesService);
