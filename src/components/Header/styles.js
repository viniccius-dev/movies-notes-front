import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    > h1 {
        font-size: 22px;
        color: ${({ theme}) => theme.COLORS.PINK};
    }

    > div:nth-of-type(1) {
        margin: 24px 50px;
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        text-align: right;

        span {
            font-size: 16px;
            white-space: nowrap;
            color: ${({ theme }) => theme.COLORS.WHITE_200};
        }

        .loggout {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;