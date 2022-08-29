import React, { useEffect, useState } from 'react';
import Question from './Question';

const QuestionList = () => {
    const [question, setQuestion] = useState([]);
    const getData = async (url) => {
        //let url = `http://localhost:3004/question`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setQuestion(data);
    };

    useEffect(() => {
        getData(`http://localhost:3004/question`);
    }, []);

    return (
        <>
            {question.map((item) => (
                <Question item={item} key={item.id} />
            ))}
        </>
    );
};

export default QuestionList;
