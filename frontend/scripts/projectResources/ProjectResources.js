export default class ProjectResources {
  constructor (tools) {
    this.tools = tools;
  }

  getResources () {
    return this.tools;
  }

  getResource (idx) {
    return this.tools[idx];
  }
}
