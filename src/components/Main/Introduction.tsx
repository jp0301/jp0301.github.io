// 페이지 상단 소개글
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'


type IntroductionProps = {
    profileImage: IGatsbyImageData
}

const Background = styled.div`
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #ffffff;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 768px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        padding: 0 20px;
    }

`

const SubTitle = styled.div`
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const Title = styled.div`
    margin-top: 5px;
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 25px;
    }

`

const Introduction: FunctionComponent<IntroductionProps> = function ({
    profileImage,
}) {
    return (
        <Background>
            <Wrapper>
                <ProfileImage profileImage={profileImage}/>

                <div>
                    <SubTitle>"안녕하세요, 백엔드 ⚙ 주니어 개발자"</SubTitle>
                    <Title>묵직 꾸준 기록 기술 블로그</Title>
                </div>
            </Wrapper>
        </Background>
    )
}

export default Introduction