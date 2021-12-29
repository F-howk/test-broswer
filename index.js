const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')

let url = ''
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
  ipcMain.on("refresh",(e,str)=>{
    url = str
    win.reload()
    setTimeout(()=>{
      e.reply("sendUrl",url)
    },300)
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
