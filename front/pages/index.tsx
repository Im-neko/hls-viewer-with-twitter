import React from "react";
import { inject, observer } from 'mobx-react';
import styled from "styled-components";

import { MainStoreType } from '../stores/mainStore';

import Switchs from '../components/switchs';
import VideoContainer from '../components/video_container';


interface IProps {
  main?: MainStoreType
}

class IndexPage extends React.Component<IProps> {

  componentDidMount() {
    this.props.main.start();
  }

  render() {
    return (
      <Wrapper> 
        <Switchs />
        <VideoContainer />
      </Wrapper>
    ); 
  }
}

const Wrapper = styled.div`
  padding-top: 100px;
`

export default inject('main')(observer(IndexPage))
