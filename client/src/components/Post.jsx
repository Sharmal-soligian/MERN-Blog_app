import React from 'react';
import styled from 'styled-components';

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
`;

const Time = styled.time``;

const Summary = styled.p`
  margin: 10px 0;
  line-height: 1.4rem;
`;

const Post = () => {
  return (
      <Poster>
        <ImageContainer>
          <ImageOne src='https://buffer.com/resources/content/images/size/w2000/format/avif/2023/09/ashes-sitoula-UfEyDdXlRp8-unsplash--1-.jpg' />
        </ImageContainer>
        <Texts>
          <h2>Small Business, Big Lessons is a podcast from Buffer that goes behind the scenes.</h2>
          <Info>
            <Author>Sharmal soligian</Author>
            <Time>2023-07-10 10:00</Time>
          </Info>
          <Summary>But there was another reason that media newsletters started to take off around the 1940s. At the time, public trust in mainstream media was wavering.</Summary>
        </Texts>
      </Poster>
  );
};

export default Post;
