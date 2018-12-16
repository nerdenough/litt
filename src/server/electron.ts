import { app, BrowserWindow } from 'electron'
import * as path from 'path'

const isDev = process.env.NODE_ENV === 'production'
let mainWindow: BrowserWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(
    isDev
      ? `file://${path.join(__dirname, '../build/index.html')}`
      : 'http://localhost:3000'
  )

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
