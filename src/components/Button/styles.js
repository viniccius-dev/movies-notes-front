import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        margin-right: 5px;
    }
`;