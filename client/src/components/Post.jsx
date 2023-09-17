import React from 'react';
import styled from 'styled-components';
import { formatISO9075 } from 'date-fns';
import { environment } from '../environment/environment';

const api_url = environment.base_Url;

const Poster = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageOne = styled.img`
  display: flex;
  max-width: 100%;
  height: 30vh;
`;

const Texts = styled.div`
  flex: 1;
`;

const Info = styled.p`
  margin: 6px 0;
  display: flex;
  gap: 10px;
  font-weight: bold;
  font-size: 0.7rem;
  color: #888;
`;

const Author = styled.a`
  color: #333;
  text-decoration: underline;
`;

const Time = styled.time``;

const Summary = styled.p`
  margin: 10px 0;
  line-height: 1.4rem;
`;

const Post = ({title, summary, cover, content, createdAt, author}) => {
  return (
      <Poster>
        <ImageContainer>
          <ImageOne src={ `${api_url}` + '/' + cover } />
        </ImageContainer>
        <Texts>
          <h2>{ title }</h2>
          <Info>
            <Author>{ author?.username }</Author>
            <Time>{ formatISO9075(new Date(createdAt)) }</Time>
          </Info>
          <Summary>{ summary }</Summary>
        </Texts>
      </Poster>
  );
};

export default Post;
