import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ReactPlayer from 'react-player';

import { MainStoreType } from '../stores/mainStore';

interface IProps {
  main?: MainStoreType
}


const VideoPlayer = (props: IProps) => {
  switch (props.main.hashtag) {
    case 'ORF':
      return (
        <Wrapper>
          <ReactPlayer 
            url={'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'} 
            controls
            width='100%'
            height='100%'
          />
        </Wrapper>
      )
    case 'bbbb':
      return (
        <Wrapper>
          <ReactPlayer 
            url={'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'}
            controls
            width='100%'
            height='100%'
          />
        </Wrapper>
      )
    case 'cccc':
      return (
        <Wrapper>
          <ReactPlayer 
            url={'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8'}
            controls
            width='100%'
            height='100%'
          />
        </Wrapper>
      )
    case 'dddd':
      return (
        <Wrapper>
          <ReactPlayer 
            url={'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8'}
            controls
            width='100%'
            height='100%'
          />
        </Wrapper>
      )
    default:
      return (
        <Wrapper>
          <ReactPlayer 
            url={'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'} 
            controls
            width='100%'
            height='100%'
          />
        </Wrapper>
      )
  }
}

const Wrapper = styled.div`
  position: fixed;
  flex-direction: column;
  width: 50%;
  z-index: 999;
`;

export default inject('main')(observer(VideoPlayer))
