import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK_BACKGROUND};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const Stars = styled.div`
    padding: 7px 0;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;