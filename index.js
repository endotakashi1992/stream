// Get the current window
var gui = require('nw.gui')
var win = gui.Window.get();

// Create a new window and get it
var new_win = gui.Window.open('https://github.com');