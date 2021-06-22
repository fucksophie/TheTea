const { app, BrowserWindow } = require('electron');
let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 944,
    height: 250,
    frame: false,
    show: false,
    webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
		},
  });
  
  win.loadFile(__dirname + '/website/index.html');
  
  win.on('ready-to-show', ()=>{
    win.show()
    win.focus()
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', async () => {

  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
