const { remote } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  remote,
});