import styled from 'styled-components';

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #3b5bfd;
    margin-bottom: 15px;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    width: 90px;
    border-radius: 50%;
  }

  span {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: bold;
  }

  p {
    max-width: 400px;
    text-align: center;
    color: #666;
    line-height: 1.4;
  }
`;

export const Issues = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 30px;

  li {
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;
    display: flex;

    & + li {
      margin-top: 15px;
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 3px solid #eee;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      strong {
        color: #333;
        font-weight: 600;
        display: flex;
        flex-wrap: wrap;

        a {
          color: #333;
          font-size: 16px;
          text-decoration: none;
          margin-right: 10px;
          margin-bottom: 5px;

          &:hover {
            color: #3b5bfd;
          }
        }

        span {
          font-size: 12px;
          background: #eee;
          border-radius: 4px;
          padding: 5px 7px;
          margin-right: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
