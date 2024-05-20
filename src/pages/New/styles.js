import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 35px 80px;
    }
`;

export const Form = styled.form`
    max-width: 2000px;
    margin: 0 auto;

    > a {
        width: 70px;
        color: ${({ theme}) => theme.COLORS.PINK};
        display: flex;
        align-items: center;

        svg {
            font-size: 19px;
            margin-right: 5px;
        }
    }

    > h2 {
        margin: 20px 0;
        font-size: 35px;
        font-weight: 500;
    }

    .inputs {
        display: flex;
        gap: 35px;
    }
`;