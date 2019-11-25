import { getManager } from "typeorm";

import { Tweet, ITweet } from "../entities/Tweet.entity";


export class TweetService {

  async getTweetByHashtag(hashtag: string) {
    const tweets = await Tweet.find({ where: { hashtag } });  
    return tweets
  }
}
