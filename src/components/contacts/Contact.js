import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showInfo: false
  };
  onDelete = (id, dispatch) => {
    dispatch({ type: 'DEL_CON', payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card  card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({ showInfo: !this.state.showInfo })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDelete.bind(this, id, dispatch)}
                />
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
