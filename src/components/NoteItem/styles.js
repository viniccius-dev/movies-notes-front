import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;

    background-color: ${({ theme, $isNew }) => $isNew == "true" ? "transparent" : theme.COLORS.BACKGROUND_300};
    color: ${({ theme, $isNew }) => $isNew == "true" ? theme.COLORS.WHITE_100 : theme.COLORS.GRAY_300};

    border: ${({ theme, $isNew }) => $isNew == "true" ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete, .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 55px;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;