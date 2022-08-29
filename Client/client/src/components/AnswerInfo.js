import React, { useState } from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.div`
    //border: 1px solid black;
    display: flex;
`;
const Buttons = styled.div`
    margin-left: 3px;
`;
const AnswerRightBtn = styled.span`
    color: gray;
`;
const AnswerLeftBtn = styled.span`
    color: gray;
    margin-right: 10px;
`;

const HitnumBtns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 10%;
`;
const AnswerRecommendBox = styled.div`
    //border: 1px solid red;
    //height: fit-content;
    text-align: center;
    margin: 0;
    padding: 4px;
    //background-color: lightgray;
`;
const AnswerContentContainer = styled.div`
    border: 1px solid brown;
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
`;
const AnswerContent = styled.p`
    //border: 1px solid blue;
    margin: 0;
`;
const AnswerBtnContainer = styled.div`
    //border: 1px solid red;
    display: flex;
    justify-content: space-between;
`;
const AnswerInfoTag = styled.div`
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
`;
const AnswerUserId = styled.p`
    color: blue;
    margin: 0;
`;
const AnsweredDate = styled.p`
    color: gray;
    margin: 0;
`;
const AnswerInput = styled.textarea``;

const AnswerInfo = (props) => {
    const url = 'http://localhost:3001';
    const deleteAnswer = () => {
        fetch(`${url}/answer/${props.id}`, {
            method: 'DELETE',
        });
    };
    const [isEdit, setIsEdit] = useState(false);
    const editAnswer = () => {
        setIsEdit(true);
    };

    const [editedAnswer, setEditedAnswer] = useState('');
    const answerEdit = (e) => {
        setEditedAnswer(e.target.value.trim());
    };
    const editedDate = new Date().toLocaleDateString();
    const answer = {
        content: editedAnswer,
        createdAt: props.createdAt,
        updatedAt: editedDate,
        userId: props.userId,
        questionId: props.questionId,
        recommend: 0,
    };
    const [alert, setAlert] = useState(false);
    const sendEditAnswer = () => {
        if (editedAnswer.trim().length === 0) {
            console.log(editedAnswer.trim().length);
            setAlert(true);
            return;
        }
        fetch(`${url}/answer/${props.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answer),
        });
        setIsEdit(true);
        setAlert(false);
    };
    const cancelBtn = () => {
        setIsEdit(false);
        setAlert(false);
    };
    const plusRecommend = () => {
        const data = props.recommend + 1;
        fetch(`${url}/answer/${props.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recommend: data }),
        });
    };
    const minusRecommend = () => {
        if (props.recommend <= 0) {
            return;
        }
        const data = props.recommend - 1;
        fetch(`${url}/answer/${props.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recommend: data }),
        });
    };
    return (
        <AnswerContainer>
            <HitnumBtns>
                <button onClick={plusRecommend}>+</button>
                <AnswerRecommendBox>{props.recommend}</AnswerRecommendBox>
                <button onClick={minusRecommend}>-</button>
            </HitnumBtns>
            <AnswerContentContainer>
                {isEdit ? (
                    <AnswerInput type="text" defaultValue={props.content} onChange={answerEdit} />
                ) : (
                    <AnswerContent>{props.content}</AnswerContent>
                )}
                {alert && <span>댓글을 입력하세요</span>}
                <AnswerBtnContainer>
                    <Buttons>
                        {isEdit ? (
                            <>
                                <AnswerLeftBtn onClick={sendEditAnswer}>Send</AnswerLeftBtn>
                                <AnswerRightBtn onClick={cancelBtn}>Cancel</AnswerRightBtn>
                            </>
                        ) : (
                            <>
                                <AnswerLeftBtn onClick={editAnswer}>Edit</AnswerLeftBtn>
                                <AnswerRightBtn onClick={deleteAnswer}>Delete</AnswerRightBtn>
                            </>
                        )}
                    </Buttons>
                    <AnswerInfoTag>
                        <AnswerUserId>{props.userId}</AnswerUserId>
                        <AnsweredDate>{props.updatedAt}</AnsweredDate>
                    </AnswerInfoTag>
                </AnswerBtnContainer>
            </AnswerContentContainer>
        </AnswerContainer>
    );
};

export default AnswerInfo;
