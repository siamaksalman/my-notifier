const notifier = require('node-notifier');
const path = require('path');


function minTomilli(mins = 1) {
  return mins * 60000;
}

function stop() {
  notifier.notify({
    'title': 'Brain Rest',
    'message': 'let\'s take a walk  ' + new Date().toLocaleTimeString(),
    'wait': true,
    "icon": path.join(__dirname, 'notif.png'),
  });

  setTimeout(start, minTomilli(15));
}


function start() {
  notifier.notify({
    'title': 'Brain Active',
    'message': 'Start hunting !!  ' + new Date().toLocaleTimeString(),
    'wait': true,
    "icon": path.join(__dirname, 'owl.png'),
  });
  setTimeout(stop, minTomilli(52));
}


start();
