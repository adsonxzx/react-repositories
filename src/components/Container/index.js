import styled from 'styled-components';

const Container = styled.div`
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
    display: flex;
    flex-direction: column;

    svg {
      margin-bottom: 5px;
      margin-right: 10px;
    }
  }
`;

export default Container;
