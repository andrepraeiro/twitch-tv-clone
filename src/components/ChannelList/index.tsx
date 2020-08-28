import React from 'react';

import { 
   List, 
    ChannelContainer,
    LeftSide,
    Avatar,
    Column,
    Username,
    Info,
    RightSide,
    RightCircle
  } from './styles';

const ChannelList: React.FC = () => {
const ChannelItens = () => (
  <ChannelContainer>
    <LeftSide>
      <Avatar/>
      <Column>
        <Username>rocketseat_oficial</Username>
        <Info>36 news videos</Info>
      </Column>
    </LeftSide>
    <RightSide>
      <RightCircle/>
    </RightSide>
  </ChannelContainer>

);

  return (
    <List>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
      <ChannelItens/>
    </List>
  );
};

export default ChannelList;
