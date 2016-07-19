import module from './module';
import ProjectResources from './ProjectResources';
import resources from '../data/frontendResources';

class FrontendResources extends ProjectResources {
  constructor () {
    super(resources);
  }
}

module.service('FrontendResourcesService', FrontendResources);
