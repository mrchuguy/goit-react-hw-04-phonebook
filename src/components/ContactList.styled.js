import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  padding-left: 20px;

  & li {
    font-size: 18px;
    font-weight: 500;
  }

  & li:not(:last-child) {
    margin-bottom: 8px;
  }

  & button {
    font-size: 14px;
    margin-left: 10px;
    background: #2797f1;
    color: #fff;
    border: #fff;
    cursor: pointer;
    padding: 3px 6px;
    border-radius: 10px;
  }
`;
