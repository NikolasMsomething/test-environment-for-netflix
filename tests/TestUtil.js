import path from "path";
import { Polly } from "@pollyjs/core"
import { setupPolly } from 'setup-polly-jest';
import FSPersister from "@pollyjs/persister-fs";
import NodeHttpAdapter from '@pollyjs/adapter-node-http';

export const setupPollyInTestFile = () => {
  Polly.register(FSPersister);
  Polly.register(NodeHttpAdapter);

  let context = setupPolly({
    adapters: [ NodeHttpAdapter ],
    adapterOptions: {
      fetch: {
        context: global
      }
    },

    persister: FSPersister,
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__'),
      }
    },

    matchRequestsBy: {
      method: true,
      headers: true,
      body: true,
      order: true,
  
      url: {
        protocol: false,
        username: false,
        password: false,
        hostname: false,
        port: false,
        pathname: true,
        query: true,
        hash: false
      }
    }
  });

  global.pollyContext = context;
}

export const setupShallowWrapper = (Component, props={}, state=null) => {
  const wrapper = shallow(<Component {...props}/>)
  if(state) wrapper.setState(state)
  return wrapper
}

export const setupShallowWrapperDive = (Component, props={}, state=null) => {
  const wrapper = shallow(<Component {...props}/>).dive()
  if(state) wrapper.setState(state)
  return wrapper
}

export const addPropertiesToWindowTagflix = (obj) => {
  let copyObj = window.Tagflix;
  window.Tagflix = {...copyObj, ...obj}
}

export const createInjectOverlayParentContainer = (options) => {
  const divParent = document.createElement('div');
  divParent.id = 'overlay-parent'
  if(options && options.style) divParent.style = options.style
  document.body.appendChild(divParent)
}

export const createInjectOverlayChildContainer = (options) => {
  const divContainer = document.createElement('div');
  divContainer.id = 'overlay-container'
  if(options && options.style) divContainer.style = options.style
  document.body.appendChild(divContainer)
}

export const setupEventType = (eventType) => {
  window.HTMLMediaElement.prototype.on = (e) => e.type = eventType;
} 
