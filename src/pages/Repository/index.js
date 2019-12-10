/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';

import { Owner, Issues, Filter, Pagination } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
    filter: 'open',
  };

  async componentDidMount() {
    const { match } = this.props;
    // eslint-disable-next-line react/prop-types
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFilter = async (e, filter) => {
    let elements = document.getElementsByClassName('filter-issues');
    elements = [...elements];
    elements.map(el => el.classList.remove('active'));
    e.target.classList.add('active');

    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { data: issues } = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filter,
        per_page: 5,
      },
    });

    this.setState({
      issues,
      filter,
      page: 1,
    });
  };

  handlePagination = async e => {
    const { match } = this.props;
    const { filter, page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const { data: issues } = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filter,
        per_page: 5,
        page: e === 'next' ? page + 1 : page - 1,
      },
    });

    this.setState({
      issues,
      page: e === 'next' ? page + 1 : page - 1,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return (
        <Container>
          <p>carregando</p>
        </Container>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar ao repositórios</Link>
          <img src={repository.owner.avatar_url} alt="" />
          <span>{repository.name}</span>
          <p>{repository.description}</p>
        </Owner>

        <Filter>
          <span
            className="filter-issues -all"
            onClick={e => this.handleFilter(e, 'all')}
          >
            All
          </span>
          <span
            className="filter-issues -open active"
            onClick={e => this.handleFilter(e, 'open')}
          >
            Open
          </span>
          <span
            className="filter-issues -closed"
            onClick={e => this.handleFilter(e, 'closed')}
          >
            Closed
          </span>
        </Filter>

        <Issues>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt="" />
              <div>
                <strong>
                  <a href={issue.html_url}> {issue.title}</a>

                  {issue.labels.map(iss => (
                    <span key={String(iss.id)}>{iss.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </Issues>

        <Pagination>
          <button
            className="pagination-arrow"
            onClick={() => this.handlePagination('back')}
            disabled={page === 1}
          >
            <FaAngleLeft fontSize={16} />
          </button>
          <button
            className="pagination-arrow"
            onClick={() => this.handlePagination('next')}
          >
            <FaAngleRight fontSize={16} />
          </button>
        </Pagination>
      </Container>
    );
  }
}
