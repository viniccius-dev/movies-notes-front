import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 90px auto;
    grid-template-areas:
    "header"
    "title"
    "content";

    > div:nth-of-type(1) {
        grid-area: title;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 0 80px;

        > h3 {
            font-size: 28px;
            font-weight: 400;
        }

        > a button {
            width: 200px;
            height: 50px;
            margin: 0;
        }
    }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 5px;
    margin: 0 75px;
    overflow-y: auto;
`;