import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleButton(value) {
    const minLength = 6;
    this.setState({ isDisabled: value.length < minLength });
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
    this.handleButton(value);
  }

  render() {
    const { user, isDisabled } = this.state;
    return (
      <div className="login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            placeholder="Senha"
            data-testid="password-input"
            minLength="6"
            value={ password }
            onChange={ this.handleChange }
            required
          />
        </section>
        <div className="link">
          <Link to="/carteira">
            Entrar
            {/* <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => login({ user }) }
            />
              Entrar
            </button> */}
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
