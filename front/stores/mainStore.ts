import { action, observable } from "mobx";

import { post } from '../service/FetchWrapper';


interface ITweet {
  tweet_id_str: string
  hashtag: string
  user_name: string
  display_name: string
  icon_url: string
  text: string
  image_url_1?: string
  image_url_2?: string
  image_url_3?: string
  image_url_4?: string
  tweeted_at?: string
}

interface ITweetRes {
  message: string
  data: ITweet[],
  error: boolean
}

class MainStore {
  crawler;

  @observable
  hashtag: string = '';

  @observable
  comments: ITweet[] = [];

  @action
  setVideoHashtag = (tag: string) => {
    this.hashtag = tag;
  }

  @action
  start = async () => {
    this.crawler = setInterval(this.getTweetByHashtag, 1000);
  }

  getTweetByHashtag = async () => {
    this.comments = (await post<ITweetRes>('', {id: this.hashtag})).data;
    console.log(this.comments)
  }
}

const mainStore = new MainStore();
export type MainStoreType = typeof mainStore;
export default mainStore;
