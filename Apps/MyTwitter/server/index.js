const express = require('express');
const cors = require('cors');
const app = express();
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");
app.use(cors());
app.use(express.json());
const db = monk(process.env.MONGO_URI || 'localhost / tweetDB');
const tweets = db.get('tweets');
filter = new Filter();
// app.get('/', (req, res) => {
//   res.json({
//     message: 'The requset is completed '
//   });
// });
app.get('/tweets', (req, res) => {
  tweets
    .find()
    .then(tweets => {
      res.json(tweets);
    });
});


function isValid(tweet) {
  return (
    tweet.name &&
    tweet.name.toString().trim() !== '' &&
    tweet.content &&
    tweet.content.toString().trim() !== ''
  );
}
const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 1 // limit each IP to 1request per windowMs
});
//  apply to all requests
app.use(limiter);

app.post('/tweets', (req, res) => {
  if (isValid(req.body)) {
    const tweet = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      created: new Date()
    };
    tweets
      .insert(tweet)
      .then(createdTweet => {
        res.json(createdTweet);
      })
  } else {
    res.status(422);
    res.json({
      message: 'hey enter valid tweet'
    });
  }
});

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});

