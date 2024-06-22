// it is import to use `import * as`
import * as maa from '@nekosu/maa-node'
import pkg from '../../../package.json'

import { app, BrowserWindow } from 'electron'
import * as path from 'path'

console.log(maa.version(), maa.AdbController.agent_path())

export function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/main.js')
    }
    // icon: path.join(__dirname, '../render/assets/icon.png')
  })

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, '../render/index.html'))
  } else {
    mainWindow.loadURL(
      `http://${process.env.VITE_DEV_SERVER_HOST}:${process.env.VITE_DEV_SERVER_PORT}`
    )
    mainWindow.webContents.on('did-frame-finish-load', () => {
      // useDebug(mainWindow)
    })
  }
}

app.setAboutPanelOptions({
  applicationName: pkg.name,
  applicationVersion: pkg.version
  // iconPath: path.join(__dirname, '../render/assets/icon.png')
})

app.on('ready', async () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
