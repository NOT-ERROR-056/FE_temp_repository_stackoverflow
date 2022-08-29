import React from 'react';
import { BodyContainer } from '../components/BodyContainer';
import Header from '../components/Header';
import QuestionInput from '../components/QuestionInput';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100%;
`;

const AskQuestion = () => {
    return (
        <Background>
            <Header />
            <BodyContainer>
                <h1>Ask a public question</h1>
                <QuestionInput></QuestionInput>
            </BodyContainer>
            <Footer />
        </Background>
    );
};

export default AskQuestion;
