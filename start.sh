pm2 start app.js --name 'repbot' --watch --ignore-watch="data" --max-restarts=0
pm2 logs