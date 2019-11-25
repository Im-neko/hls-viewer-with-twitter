import Router from 'next/router'
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import { MainStoreType } from '../stores/mainStore';


interface IProps {
  main?: MainStoreType
}

const SwitchButton = (props: IProps) => {
  return (
    <Wrapper>
      #<input type="text" onChange={ (e) => {SwitchButton.changeHashtag(e, props)}} value={props.main.hashtag} placeholder="検索したいハッシュタグを入力してください" />
    </Wrapper>
  )
}

SwitchButton.changeHashtag = (e: any, props: IProps) => {
  e.preventDefault();
  props.main.setVideoHashtag(e.target.value);
}

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  color: #FFF;
  background-color: #45494f;
  font-size: 24px;
  padding-top: 4px;
  padding-buttom: 4px;
  input {
    width: 450px;
    background-color: #45494f;
    font-size: 24px;
    border:0;
    margin:0 0 20px;
    color: #FFF;
  }
`;

export default inject("main")(observer(SwitchButton))
