import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';

import { Owner, Issues, Filter } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
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

  handleFilter = async e => {
    let elements = document.getElementsByClassName('filter-issues');
    elements = [...elements];
    elements.map(el => el.classList.remove('active'));
    e.target.classList.add('active');

    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { data: issues } = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: e.target.dataset.filter,
        per_page: 5,
      },
    });

    this.setState({
      issues,
    });
  };

  render() {
    const { repository, issues, loading } = this.state;

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
            data-filter="all"
            className="filter-issues -all"
            onClick={this.handleFilter}
          >
            All
          </span>
          <span
            data-filter="open"
            className="filter-issues -open active"
            onClick={this.handleFilter}
          >
            Open
          </span>
          <span
            data-filter="closed"
            className="filter-issues -closed"
            onClick={this.handleFilter}
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

                  {issue.labels.map(issue => (
                    <span key={String(issue.id)}>{issue.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </Issues>
      </Container>
    );
  }
}
