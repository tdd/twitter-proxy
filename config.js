module.exports = {
  // Grab this info from your app page on dev.twitter.com.
  // Remember: don't share it with anyone!
  consumerKey: process.env.TWITTER_PROXY_CONSUMER_KEY || '',
  consumerSecret: process.env.TWITTER_PROXY_CONSUMER_SECRET || '',
  accessToken: process.env.TWITTER_PROXY_ACCESS_TOKEN || '',
  accessTokenSecret: process.env.TWITTER_PROXY_ACCESS_TOKEN_SECRET || ''
};
