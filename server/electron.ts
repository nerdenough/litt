import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import GraphqlServer from './server'

const isDev = process.env.NODE_ENV === 'production'
let mainWindow: BrowserWindow
const server = new GraphqlServer()

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
  server.start()
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
