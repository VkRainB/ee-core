const EE = require('../ee');

const Services = {

  /**
   * 获取 all addon instances
   */  
  all() {
    const { CoreApp } = EE;
    const instances = CoreApp.service || null;
    if (!instances) {
      throw new Error('Services not exists or do not call directly at the top!');
    };
    return instances;
  },

  /**
   * 获取 addon instance
   */  
  get(name) {
    const instances = this.all();
    const instance = instances[name] || null;
    if (!instance) {
      throw new Error(`Service class '${name}' not exists or do not call directly at the top!`);
    };
    return instance;
  },

};

module.exports = Services;