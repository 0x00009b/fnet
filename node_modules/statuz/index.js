const os = require('os');
const pageUtils = require('./page.js');
const exec = require('child_process').exec;

function execute(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

function timeTillNow(seconds) { // time in seconds
  let ss = 0;
  if (!(+seconds)) { return 'Just now'; } // if not a number, get a out
  ss = +(+seconds).toFixed(0);

  let timeString = []; 
  let mm = 0;
  let hh = 0;
  let dd = 0;
  let MM = 0;
  
  if(ss >= 2.628e+6){
    MM = Math.trunc(ss / 2.628e+6);
    ss = ss % 2.628e+6;
    timeString.push(`${MM} months`);
  }

  if(ss >= 86400){
    dd = Math.trunc(ss / 86400);
    ss = ss % 86400;
    timeString.push(`${dd} days`);
  }

  if(ss >= 3600){
    hh = Math.trunc(ss / 3600);
    ss = ss % 3600;
    timeString.push(`${hh} hours`);
  }

  if(ss >= 60){
    mm = Math.trunc(ss / 60);
    ss = ss % 60;
    timeString.push(`${mm} minutes`);
  }

  timeString.push(`${ss} seconds`);

  return `${timeString.join(', ')} ago`;
}

// 2 days 5 hours 4 minutes 1 sec ago
function statusDetails(){
  let pageStats = [];

  pageStats.push({
    title: 'App Path',
    content: __dirname.split('node_modules')[0]
  })
  
  pageStats.push({
    title: 'Last Restart',
    content: timeTillNow(process.uptime())
  });

  pageStats.push({
    title: 'System Memory',
    content: `${Math.trunc(os.freemem()/1000000)} Mb free of ${Math.trunc(os.totalmem()/1000000)} Mb`
  })

  pageStats.push({
    title: 'App Memory Usage',
    content: `${Math.trunc(process.memoryUsage().heapUsed / 1000000)} Mb`
  })

  return execute(`git log --pretty='format:%s' -n 1`)
  .then(lastLog => {
    pageStats.push({
      title: 'Last Update',
      content: lastLog
    })
    return pageStats;
  })
  .catch(error  => {
    return Promise.resolve(pageStats);
  })
} 

function getServerStatus(req, res){
  res.set('Content-Type', 'text/html');
  statusDetails()
  .then(resourcesCalculated => {
    res.send(pageUtils.renderPage(resourcesCalculated));
  })
  .catch(error => {
    res.send("Resource calculation error");
  })
}

module.exports = getServerStatus;