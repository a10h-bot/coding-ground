const fs = require('fs');
const vote = {
  mongo: 0,
  mysql: 0,
  postgres: 0
};
fs.readFile('votes.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  data.toLowerCase().split('\n').forEach(element => {
    if (element.includes('mongo')) {
      vote.mongo++;
    } else if (element.includes('mysql')) {
      vote.mysql++;
    } else if (element.includes('postgres')) {
      vote.postgres++;
    }
  })
  console.log(vote);
});