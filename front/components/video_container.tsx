import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import VideoPlayer from './video_player';
import CommentList from './comment_list';


const VideoContainer = () => {
  return (
    <Wrapper>
      <VideoPlayer />
      <CommentList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 50px;
  display: inline-box;
`;

export default VideoContainer;
