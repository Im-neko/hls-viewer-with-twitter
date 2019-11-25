const twitter = require('twitter'); 
const mysql = require('mysql');
const util = require('util');

const env = require('../config/env').env;

const client = new twitter({
  consumer_key: env.CK,
  consumer_secret: env.CS,
  access_token_key: env.AK,
  access_token_secret: env.AT
});


const searchTweet = async (queryArg: string ) => {
  if (!queryArg) { return; }
  const con = mysql.createConnection({
    connectionLimit: 5,
    host: env.mysql_host,
    user: env.mysql_user,
    password: env.mysql_pass,
    database: env.mysql_db,
    charset : 'utf8mb4',
  });
  const tweets = await client.get('search/tweets', { q: queryArg+' -RT', count: 100 });
  util.promisify(con.query);
  try {
    for (let i=0; i<tweets.statuses.length-1; i++) {
      console.log(i,'/',tweets.statuses.length-1)
      try {
        let tweet = tweets.statuses[i];
        const data = {
          tweet_id_str: tweet.id_str,
          hashtag: queryArg,
          user_name: tweet.user.screen_name,
          display_name: tweet.user.name,
          icon_url: tweet.user.profile_image_url_https,
          text: tweet.text,
          tweeted_at: new Date(tweet.created_at)
        }
        const res = await con.query('INSERT IGNORE INTO tweet SET ?', data);
      } catch (e) {
        con.end()
        console.log(tweets.statuses[i])
        console.error(e);
      }
    }
    con.end()
    return;
  } catch (e) {
    con.end()
    console.error(e);
    return;
  }
}

export default searchTweet;
