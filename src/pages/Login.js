import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    // this.verify = this.verify.bind(this);
  }

  handleChange({ target }) {
    // console.log(target);
    const { value, name } = target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  // https://www.w3resource.com/javascript/form/email-validation.php
  // verify() {
  //   const { user } = this.state;
  //   const { email, password } = user;
  //   const minLength = 6;
  //   // const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   // user.email.match(format)
  //   if (password.length >= minLength
  //     && email.includes('@')
  //     && email.includes('.com')) {
  //     return false;
  //   }
  // }

  render() {
    const minLength = 6;
    const { user } = this.state;
    const { email, password } = user;
    const { history, userLogin } = this.props;
    return (
      <div className="login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="text"
            placeholder="Senha"
            data-testid="password-input"
            minLength="6"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
        </section>
        <div className="link">
          <button
            type="button"
            disabled={ !(password.length >= minLength
              && email.includes('@')
              && email.includes('.com')) }
            onClick={ () => {
              userLogin(user);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
