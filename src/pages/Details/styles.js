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

export const Content = styled.div`
    max-width: 2000px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

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

> p {
    text-align: justify;
}
`;

export const Title = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;

    > h2 {
        font-size: 35px;
        font-weight: 500;
    }

    > div {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 22px;
        margin-left: 20px;

        > svg {
            margin: 0 2px;
        }
    }
`;

export const About = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Tags = styled.div`
    margin: 40px 0;
`;