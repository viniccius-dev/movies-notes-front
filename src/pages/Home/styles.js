import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 60px auto;
    grid-template-areas:
    "header"
    "title"
    "content";

    > div:nth-of-type(1) {
        grid-area: title;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 50px 80px 40px;

        > h3 {
            font-size: 28px;
            font-weight: 400;
        }

        > button {
            width: 200px;
            height: 50px;
            margin: 0;
        }
    }
`;