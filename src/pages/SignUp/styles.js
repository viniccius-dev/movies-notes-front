import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme}) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        font-weight: 400;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    > a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        color: ${({ theme}) => theme.COLORS.PINK};

        svg {
            font-size: 19px;
            margin-right: 5px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;