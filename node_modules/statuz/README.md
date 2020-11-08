# Server status page simplified.
Server status page with uptime, memory and git log details.
![Statuz screenshot](https://github.com/shajanjp/statuz/raw/master/statuz-screenshot.png)

## Install

```bash
$ npm install statuz
```

## Usage

```javascript
const app = require('express')();
const statuz = require('statuz');
app.get('/status', statuz);
```
