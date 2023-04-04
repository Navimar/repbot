pm2 start app.js --name 'repbot' --max-restarts=0 --watch server
pm2 logs --lines 20
