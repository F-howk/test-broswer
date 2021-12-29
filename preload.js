const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer',ipcRenderer)
contextBridge.exposeInMainWorld('ipcRendereron',(str,dom,search)=>{
    ipcRenderer.on(str,(e,arg)=>{
        dom.src = arg
        search.value = arg
    })
})