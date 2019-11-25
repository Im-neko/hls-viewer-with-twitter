import { Entity, PrimaryColumn, Column, BaseEntity, Index } from "typeorm";

export interface ITweet {
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

@Entity()
export class Tweet extends BaseEntity {
  [key: string]: any;

  @PrimaryColumn()
  tweet_id_str: string;

  @Column()
  @Index()
  hashtag: string;

  @Column()
  user_name: string;

  @Column()
  display_name: string;

  @Column()
  icon_url: string;

  @Column("text")
  text: "text";

  @Column({ default: null })
  image_url_1: string;

  @Column({ default: null })
  image_url_2: string;

  @Column({ default: null })
  image_url_3: string;

  @Column({ default: null })
  image_url_4: string;

  @Column("datetime")
  tweeted_at: Date;
}
