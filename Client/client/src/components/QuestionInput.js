import React from 'react';
import styled from 'styled-components';

const QuestionInputBox = styled.div`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06), 0 3px 8px hsla(0, 0%, 0%, 0.09);
    padding-left: 3%;
    padding-top: 3%;
`;

const PostButton = styled.button`
    color: hsl(0, 0%, 100%);
    background-color: hsl(206, 100%, 52%);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

    position: relative;
    display: inline-block;
    padding: 0.8em;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
`;

const QuestionInput = () => {
    const postInput = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log(e.target[2].value);

        const newQuestion = {
            title: e.target[0].value,
            content: e.target[1].value,
            tag: e.target[2].value,
        };

        console.log(newQuestion);

        // fetch('http://localhost:4000/', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newQuestion),
        // }).then((res) => {
        //     if (res.status === 202) {
        //         // 홈페이지로
        //     }
        // });
    };
    return (
        <QuestionInputBox>
            <form onSubmit={(e) => postInput(e)}>
                <label>
                    <h2> Title</h2>
                    <p>Be specific and imagine you’re asking a question to another person</p>
                </label>
                <input type="text"></input>

                <label>
                    <h2>Body</h2>
                    <p>Include all the information someone would need to answer your question</p>
                </label>
                <textarea></textarea>

                <label>
                    <h2>tags</h2>
                    <p>Add up to 5 tags to describe what your question is about</p>
                </label>
                <div>
                    <input type="text"></input>
                </div>

                <PostButton>Post your question</PostButton>
            </form>
        </QuestionInputBox>
    );
};

export default QuestionInput;
