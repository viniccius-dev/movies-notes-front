import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    justify-content: space-evenly;

    padding: 0 80px;

    > h1 {
        font-size: 48px;
        color: ${({ theme}) => theme.COLORS.PINK};
    }
`;