import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import CommentCard from './comment_card';
import { MainStoreType } from '../stores/mainStore';

interface IProps {
  main?: MainStoreType
}

const CommentList = (props: IProps) => {
  const comments = props.main.comments.map(tweet => 
    <CommentCard 
      tweet_id={tweet.tweet_id_str}
      icon_url={tweet.icon_url}
      name={tweet.display_name}
      user_id={tweet.user_name}
      text={tweet.text}
    />
  );
  return (
    <Wrapper>
      {comments} 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: auto;
  width: 50%;
  padding-left: 12px;
  margin-left: 50%;
  z-index: 999;
`;

export default inject('main')(observer(CommentList))

