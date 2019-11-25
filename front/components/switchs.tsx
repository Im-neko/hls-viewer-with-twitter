import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import { MainStoreType } from '../stores/mainStore';
import SwitchButton from './switch_button';


interface IProps {
  main?: MainStoreType
}

const Switchs = (props: IProps) => {
  return (
    <Tab>
      <SwitchButton />
    </Tab>
  )
}

const Tab = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 1000;
`;

export default Switchs;
