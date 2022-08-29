import React, { useState } from 'react';
import styled from 'styled-components';

const ReplyContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
`;
const ReplyQuestion = styled.textarea`
    height: 70%;
`;
const ReplyBtn = styled.span`
    width: fit-content;
    margin-top: 10px;
    background-color: #0995ff;
    color: white;
    padding: 8px;
    border-radius: 3px;
    overflow: hidden;
    &:hover {
        background-color: #0074cc;
    }
`;

const Reply = ({ questionId }) => {
    const url = 'http://localhost:3001';
    const createdAt = new Date().toLocaleDateString();
    const updatedAt = new Date().toLocaleDateString();
    const [content, setContent] = useState('');

    const createContent = (e) => {
        setContent(e.target.value.trim());
    };
    const [alert, setAlert] = useState(false);
    const reply = () => {
        if (content.trim().length === 0) {
            setAlert(true);
            return;
        }
        const data = {
            content,
            createdAt,
            updatedAt,
            userId: '돌고래',
            questionId,
            recommend: 0,
        };
        fetch(`${url}/answer`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        });
        setAlert(false);
    };
    return (
        <ReplyContainer>
            <h3>Your Answer</h3>
            <ReplyQuestion onKeyUp={createContent} />
            {alert && <span>댓글을 입력하세요</span>}
            <ReplyBtn onClick={reply}>Post Your Answer</ReplyBtn>
        </ReplyContainer>
    );
};

export default Reply;
