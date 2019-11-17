import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  max-width: 700px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  input {
    flex: 1;
    border-radius: 3px;
    border: 1px solid #eee;
    padding: 10px 15px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'button',
})`
  background: #7159c1;
  border: none;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
