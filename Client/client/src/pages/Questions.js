import React, { useParams, useState } from 'react';
import { BodyContainer } from '../components/BodyContainer';
import QuestionInfo from '../components/QuestionInfo';
import AnswerInfo from '../components/AnswerInfo';
import AnswerList from '../components/AnswerList';
import Reply from '../components/Reply';

const Questions = () => {
    // const { id } = useParams();
    // console.log(id);
    const id = 3; //questionId
    const [isDeleted, setIsDeleted] = useState(false);

    return (
        <BodyContainer>
            <QuestionInfo id={id} setIsDeleted={setIsDeleted} />
            <AnswerList questionId={id} isDeleted={isDeleted} setIsDeleted={setIsDeleted}>
                <AnswerInfo />
            </AnswerList>
            <Reply questionId={id} />
        </BodyContainer>
    );
};

export default Questions;
