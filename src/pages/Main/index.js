import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, SubmitButton, ListRepo } from './style';
import Container from '../../components/Container';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    const repositories = JSON.parse(localStorage.getItem('repositories'));
    if (repositories) {
      this.setState({ repositories });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleNewRepo = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { repositories, newRepo } = this.state;

    this.setState({ loading: true });
    try {
      const { data } = await api.get(`/repos/${newRepo}`);

      this.setState({
        repositories: [...repositories, data.full_name],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch (_) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt size={40} />
          <span> Repositórios </span>
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleNewRepo}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <ListRepo>
          {repositories.map(repo => (
            <li key={repo}>
              <span>{repo}</span>
              <Link to={`/repository/${encodeURIComponent(repo)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </ListRepo>
      </Container>
    );
  }
}
