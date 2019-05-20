import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Typography, Divider, Carousel } from 'antd';

import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths'

const { Title: AntdTitle, Paragraph, Text } = Typography;

const Title = styled(AntdTitle)`
  word-break: keep-all;
`;

const CarouselWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Wrapper = styled.div`
`;

const SignUpLink = styled(Link)`
  margin-right: 1rem;

  color: #1890ff;

  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const LoginLink = styled(Link)`
  color: #1890ff;

  font-size: .7rem;
  font-weight: bold;
  text-decoration: none;
`;

export default function FaceWebHomePage()  {
  return (
    <Wrapper>
      <Typography>
        <Title>
          집에서 쉽게 안면 비대칭을 개선해보세요!
        </Title>
        <Paragraph>
          *** 제품은 집에서 쉽게 안면비대칭을 개선할 수 있는 제품입니다. 어디어디서 검증을 받았고, 여기에 설명을 적으세요.
        </Paragraph>
        <CarouselWrapper>
          <Carousel autoplay>
            <div>
              <div style={{
                height: '500px',
                background: 'white',
              }}>
                <h3>여기에 제품에 관한</h3>
              </div>
            </div>
            <div style={{ height: '500px' }}>
              <h3>이미지를 넣으면 됩니다.</h3>
            </div>
            <div style={{ height: '500px' }}>
              <h3>이런식으로 나옵니다.</h3>
            </div>
            <div style={{ height: '500px' }}>
              <h3>사진이 필요해요</h3>
            </div>
          </Carousel>
        </CarouselWrapper>
        <Divider />
        <Title>
          사진 한 장으로 개선과정을 기록하고 확인해보세요.
        </Title>
        <Paragraph style={{ marginBottom: '60px' }}>
          매주 혹은 매달 마다 사진으로 기록해서 개선 과정을 확인해보세요. 단 몇 초면 확인이 가능합니다!
        </Paragraph>
        <SignUpLink to={SIGNUP_PATH}>가입하고 확인해보기</SignUpLink>
        <LoginLink to={LOGIN_PATH}>로그인하기</LoginLink>
      </Typography>
    </Wrapper>
  );
}
