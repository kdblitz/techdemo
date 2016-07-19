import module from './module';
import ProjectResources from './ProjectResources';
import resources from '../data/backendResources';

class BackendResources extends ProjectResources {
  constructor () {
    super(resources);
  }
}

module.service('BackendResourcesService', BackendResources);
