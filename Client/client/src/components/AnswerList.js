import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnswerInfo from './AnswerInfo';

const AnswerListContainer = styled.div`
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

const AnswerList = ({ questionId, isDeleted, setIsDeleted }) => {
    const url = 'http://localhost:3001';
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        const answers = async () => {
            const data = await fetch(`${url}/answer?questionId=${questionId}`).then((res) => res.json());
            setAnswers(data);
        };
        answers();
    }, [url, questionId]);
    //console.log(answers);
    const deletedAnswer = (id) => {
        fetch(`${url}/answer/${id}`, {
            method: 'DELETE',
        });
    };
    if (isDeleted) {
        answers.map((el) => {
            return deletedAnswer(el.id);
        });
        setIsDeleted(false);
    }

    return (
        <AnswerListContainer>
            {answers.map((el) => {
                return (
                    <AnswerInfo
                        key={el.id}
                        id={el.id}
                        userId={el.userId}
                        content={el.content}
                        createdAt={el.createdAt}
                        updatedAt={el.updatedAt}
                        recommend={el.recommend}
                        questionId={el.questionId}
                    />
                );
            })}
        </AnswerListContainer>
    );
};
export default AnswerList;
