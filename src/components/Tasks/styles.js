import styled from 'styled-components';

export const BoxTasks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #1b1b1b;
    gap: 10px;
    width: auto;
    color: white;
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
`;