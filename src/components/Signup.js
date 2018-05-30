// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignup } from '../actions/auth.actions';

// ==========

class Signup extends React.Component {
  state = {
    isValid: true,
    passwordClasses: 'input',
    shop_name: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    verify_password: ''
  };

  handleSignup = e => {
    e.preventDefault();
    let { shop_name, first_name, last_name, email, password, verify_password } = this.state;
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-danger',
        isValid: false
      });
    } else {
      let newUser = {shop_name, first_name, last_name, email, password};
      console.log('newUser', newUser);
      this.props.userSignup(newUser, this.props.history);
    }
  }

  render () {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6-desktop is-offset-3-desktop">
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.handleSignup}>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Shop Name"
                            id="shop-name"
                            value={this.state.shop_name}
                            onChange={e => this.setState({shop_name: e.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <input
                                className="input"
                                type="text"
                                placeholder="First Name"
                                id="first-name"
                                value={this.state.first_name}
                                onChange={e => this.setState({first_name: e.target.value})}
                                required
                              />
                            </p>
                          </div>
                          <div className="field">
                            <p className="control">
                              <input
                                className="input"
                                type="text"
                                placeholder="Last Name"
                                id="last-name"
                                value={this.state.last_name}
                                onChange={e => this.setState({last_name: e.target.value})}
                                required
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <input
                                className={this.state.passwordClasses}
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                required
                              />
                            </p>
                          </div>
                          <div className="field">
                            <p className="control">
                              <input
                                className={this.state.passwordClasses}
                                type="password"
                                placeholder="Verify Password"
                                id="verify-password"
                                value={this.state.verify_password}
                                onChange={e => this.setState({verify_password: e.target.value})}
                                required
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="control">
                        <button className="button is-primary is-fullwidth">Sign Up</button>
                      </div>
                      {!this.state.isValid ? (
                        <p id="error" className="help is-danger">
                          Passwords do not match.
                        </p>
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapDispatchToProps = dispatch => ({userSignup: bindActionCreators(userSignup, dispatch)});

export default connect(null, mapDispatchToProps)(Signup);
