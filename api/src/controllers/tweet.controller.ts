import { Request, Response } from "express";
import { TweetService } from "../services/tweet.service";


/**
 * GET /:hashtag
 * GET Hashtag Tweet info.
 */
const getTweet = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashtag = req.params.id || req.body.id;
    const tweetService = new TweetService();
    const tweets = await tweetService.getTweetByHashtag('#'+hashtag);
    res.status(200).json({message: "success", data: tweets, error: false});
  } catch (e) {
    console.error(e);
    res.status(e[0] || 500).json({message: e[1] || "failed", data: {}, error: true});
  }
};


export { getTweet };
