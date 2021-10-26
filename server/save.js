const fs = require('fs');
module.exports = (val) => {
  const data = {
    val,
    date: Date.now()
  };
  fs.appendFile('data/data.txt', JSON.stringify(data) + "\n", function (err) {
    if (err !== null) {
      console.log(err);
      throw 'log writing error';
    }
  });
}