import styled from 'styled-components';

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

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
  padding-top: 20px;

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

export const Filter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  > .filter-issues {
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 10px;
    color: #586069;
    font-size: 13px;
    cursor: pointer;
  }

  > .filter-issues.-all.active {
    border: none;
    background: #ccc;
  }

  > .filter-issues.-open.active {
    border: none;
    color: #fff;
    background: #28a745;
  }

  > .filter-issues.-closed.active {
    border: none;
    color: #fff;
    background: #cb2431;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  > .pagination-arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: #606060;
    background: #e0e0e0;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0px 0 4px rgba(0, 0, 0, 0.2);
    border: none;

    &[disabled] {
      border: none;
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background: #e0e0e0;
        color: #606060;
      }
    }

    &:hover {
      background: #3b5bfd;
      color: #fff;
    }

    &:first-child {
      margin-right: 30px;
    }
  }
`;
