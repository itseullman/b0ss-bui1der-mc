const { app, BrowserWindow, protocol } = require('electron')
const url = require("url")
const path = require("path")

let win;

function createWindow() {

    // Create browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#ffffff",
        icon: url.format({
            pathname: path.join(__dirname, "/src/assets/icons/b0b1_bund1es_62.png"),
            protocol: "file",
            slashes: true
        }),
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, "/dist/b0ss-bui1der-mc/index.html"),
        protocol: "file",
        slashes: true
    }));

    // uncomment to open DevTools
    win.webContents.openDevTools()

    // Event when the window is closed.
    win.on("closed", function () {
        win = null
    })

}

// create window on electron init
app.on("ready", function () {
    createWindow()
})

// quit when all windows are closed
app.on("window-all-closed", function () {
    // On macOS specific close process
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", function () {
    // macOS specifc close process
    if (win === null) {
        createWindow()
    }
})

