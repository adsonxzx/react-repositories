import styled, { keyframes, css } from 'styled-components';

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

const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: none;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotateAnimation} 1s linear infinite;
      }
    `}
`;

export const ListRepo = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      text-decoration: none;
      color: #7159c1;
    }
  }
`;
