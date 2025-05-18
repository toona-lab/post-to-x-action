import fs from 'fs';
import twitterApiPkg from 'twitter-api-v2';
const { TwitterApi } = twitterApiPkg;
import dotenv from 'dotenv';

if (process.env.GITHUB_ACTIONS !== 'true') {
    dotenv.config();
  }

const {
  X_API_KEY,
  X_API_KEY_SECRET,
  X_ACCESS_TOKEN,
  X_ACCESS_TOKEN_SECRET,
  POST_FILE
} = process.env;

if (!POST_FILE) {
  console.error("POST_FILE is not defined.");
  process.exit(1);
}

const client = new TwitterApi({
  appKey: X_API_KEY,
  appSecret: X_API_KEY_SECRET,
  accessToken: X_ACCESS_TOKEN,
  accessSecret: X_ACCESS_TOKEN_SECRET,
});

 // 安全のため500文字に制限
const text = fs.readFileSync(POST_FILE, 'utf-8').slice(0, 500);

try {
  const result = await client.v2.tweet(text);
  console.log("Tweet posted:", result.data);
} catch (err) {
  console.error("Failed to post tweet:", err);
  process.exit(1);
}