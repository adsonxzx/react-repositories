import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Form, SubmitButton, ListRepo } from './style';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleNewRepo = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { repositories, newRepo } = this.state;

    this.setState({ loading: true });
    const { data } = await api.get(`/repos/${newRepo}`);

    this.setState({
      repositories: [...repositories, data.full_name],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositorios
        </h1>

        <Form onSubmit={this.handleSubmit}>
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
              <a href="/">Detalhes</a>
            </li>
          ))}
        </ListRepo>
      </Container>
    );
  }
}
