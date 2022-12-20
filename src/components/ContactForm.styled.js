import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid black;
  border-radius: 10px;
  padding: 30px 10px 10px;
  display: inline-block;
  margin: 15px 0;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 30px;

  & span {
    pointer-events: none;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;

  &[type='submit'] {
    width: 50%;
    background: #2797f1;
    color: #fff;
    border: #fff;
    cursor: pointer;
  }

  &:hover[type='submit'],
  &:focus[type='submit'] {
    background: linear-gradient(45deg, #0070f1, #7097f1);
  }

  &:focus ~ span,
  &:valid ~ span,
  &:not(:empty) ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

export const Label = styled.span`
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
`;
