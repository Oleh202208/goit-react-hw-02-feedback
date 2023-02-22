import styled from 'styled-components';

const SetButton = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background-color: #fff;
  text-transform: capitalize;
  font-size: 20px;
  :hover {
    background-color: #3e2ef0;
  }
`;

export { SetButton, Btn };
