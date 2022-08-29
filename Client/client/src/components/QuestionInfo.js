import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

const QuestionInfoContainer = styled.div`
    display: flex;
`;
const QuestionRecommendBox = styled.div`
    //border: 1px solid black;
    //height: fit-content;
    text-align: center;
    margin: 0;
    padding: 4px;
    //background-color: lightgray;
    //width: fit-content;
`;
const HitnumBtns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 10%;
`;
const QuestionInfoContent = styled.div`
    border: 1px solid blue;
    flex-basis: 90%;
    overflow: hidden;
`;
const QuestionTitle = styled.div`
    //border: 1px solid pink;
    display: flex;
`;
const TitleInfo = styled.div`
    //border: 1px solid brown;
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    flex-basis: 80%;
`;
const TitleContent = styled.h1`
    margin: 0;
    font-weight: normal;
`;
const TitleViewed = styled.p`
    margin: 15px 0 0 0;
    color: #6a737c;
`;

const AskQuestionButton = styled.span`
    background-color: #0995ff;
    color: white;
    margin: 0 0 auto auto;
    padding: 8px;
    border-radius: 3px;
    overflow: hidden;
    &:hover {
        background-color: #0074cc;
    }
`;
const QuestionContent = styled.div`
    //border: 1px solid purple;
    margin: 20px 0 20px 0;
`;

const ButtonContainer = styled.div`
    //border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const QuestionTag = styled.p`
    //border: 1px solid black;
    margin: 0 3px 20px 3px;
    //margin-bottom: 20px;
    width: fit-content;
    background-color: skyblue;
    color: blue;
    border-radius: 3px;
    padding: 2px;
`;
const Buttons = styled.div`
    //border: 1px solid yellowgreen;
    margin-left: 3px;
`;
const EditButton = styled.span`
    color: gray;
    margin-right: 10px;
`;
const DeleteButton = styled.span`
    color: gray;
`;
const QuestionUserId = styled.div`
    //border: 1px solid yellow;
    color: blue;
    border-radius: 3px;
    padding: 8px;
    background-color: #d9e9f7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const QuestionInfo = ({ id, setIsDeleted }) => {
    // 버튼에 함수 연결해주세요
    // const navigate = useNavigate();
    const navigateToInputPage = () => {
        console.log('글작성페이지를 연결해주세요');
        // navigate(`/inputPage`)
    };
    const navigateToEditPage = () => {
        console.log('글수정페이지를 연결해주세요');
        // navigate(`/inputPage/${id}`)
    };

    const url = 'http://localhost:3001';
    const [question, setQuestion] = useState({});
    const deleteQuestion = () => {
        fetch(`${url}/question/${id}`, {
            method: 'DELETE',
        });
        setIsDeleted(true);
    };

    useEffect(() => {
        const questions = async () => {
            const data = await fetch(`${url}/question/${id}`).then((res) => res.json());
            setQuestion(data);
        };
        questions();
    }, [url, id]);
    const plusRecommend = () => {
        const data = question.recommend + 1;
        fetch(`${url}/question/${question.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recommend: data }),
        });
    };
    const minusRecommend = () => {
        if (question.recommend <= 0) {
            return;
        }
        const data = question.recommend - 1;
        fetch(`${url}/question/${question.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recommend: data }),
        });
    };

    return (
        <QuestionInfoContainer>
            <HitnumBtns>
                <button onClick={plusRecommend}>+</button>
                <QuestionRecommendBox>{question['recommend']}</QuestionRecommendBox>
                <button onClick={minusRecommend}>-</button>
            </HitnumBtns>

            <QuestionInfoContent>
                <QuestionTitle>
                    <TitleInfo>
                        <TitleContent>{question['title']}</TitleContent>
                        <TitleViewed>viewed {question['hitNum']} times</TitleViewed>
                    </TitleInfo>
                    <AskQuestionButton onClick={navigateToInputPage}>AskQuestion</AskQuestionButton>
                </QuestionTitle>
                <hr style={{ position: 'absolute', width: '43%', overflow: 'hidden' }} />
                <QuestionContent>{question['content']}</QuestionContent>
                <QuestionTag>{question['tag']}</QuestionTag>
                <ButtonContainer>
                    <Buttons>
                        <EditButton onClick={navigateToEditPage}>Edit</EditButton>
                        <DeleteButton onClick={deleteQuestion}>Delete</DeleteButton>
                    </Buttons>
                    <QuestionUserId>{question['userId']}</QuestionUserId>
                </ButtonContainer>
            </QuestionInfoContent>
        </QuestionInfoContainer>
    );
};

export default QuestionInfo;
