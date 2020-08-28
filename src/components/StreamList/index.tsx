import React from 'react';
import { Text } from 'react-native';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText

 } from './styles';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
              Front-end and back-end and graphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Thecnology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
};

export default StreamList;
