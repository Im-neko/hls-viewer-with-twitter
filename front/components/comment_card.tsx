import styled from 'styled-components';

import Icon from './icon';
import Name from './name';

interface IProps {
  icon_url: string
  name: string
  user_id: string
  text: string
  tweet_id: string
}


const CommentCard = (props: IProps) => {
  return (
    <Wrapper>
      <Icon icon_url={props.icon_url} user_id={props.user_id} />
      <Content onClick={ (e)=>{ e.preventDefault(); CommentCard.tweetPage(props)}}>
        <Name user_id={props.user_id} name={props.name} />
        <p>{props.text}</p>
      </Content>
    </Wrapper>
  )
}

CommentCard.tweetPage = (props: IProps) => {
  window.open('https://twitter.com/'+props.user_id+'/status/'+props.tweet_id, '_blank'); 
}


const Content = styled.div`
  cursor: pointer;
  flex-direction: column;
  padding-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
`;


const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  margin-top: 8px;
  border-bottom: solid 1px #c0c0c0;
`;

export default CommentCard
