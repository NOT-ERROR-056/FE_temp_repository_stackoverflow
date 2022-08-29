import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
`;

const PageBtnFirst = styled.span`
    background-color: hsl(27, 90%, 55%);
    color: white;
    margin-left: 3px;
    margin-right: 3px;
    border: 1px;
    padding: 2px 8px;
    border-radius: 3px;
    cursor: pointer;
`;
const PageBtnOth = styled.span`
    background-color: transparent;
    border: 1px solid black;
    margin-left: 3px;
    margin-right: 3px;
    border: 1px;
    padding: 2px 8px;
    border-radius: 3px;
    border: 1px solid lightgray;
    cursor: pointer;
    &:hover {
        background: lightgray;
    }
`;

const QuestionContainer = () => {
    return (
        <>
            <QuestionList></QuestionList>
            <Wrapper>
                <div>
                    <PageBtnFirst>1</PageBtnFirst>
                    <PageBtnOth>2</PageBtnOth>
                    <PageBtnOth>3</PageBtnOth>
                    <PageBtnOth>4</PageBtnOth>
                    <PageBtnOth>5</PageBtnOth>
                    ...
                    <PageBtnOth>1529131</PageBtnOth>
                    <PageBtnOth>next</PageBtnOth>
                </div>
                <div>
                    <PageBtnFirst>15</PageBtnFirst>
                    <PageBtnOth>30</PageBtnOth>
                    <PageBtnOth>50</PageBtnOth>
                    per page
                </div>
            </Wrapper>
        </>
    );
};

export default QuestionContainer;
