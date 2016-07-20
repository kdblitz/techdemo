import module from './module';
import ProjectResources from './ProjectResources';
import resources from '../data/extraResources';

class ExtraResources extends ProjectResources {
  constructor () {
    super(resources);
  }
}

module.service('ExtraResourcesService', ExtraResources);
