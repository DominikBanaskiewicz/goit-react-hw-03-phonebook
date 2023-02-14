import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

export class Filter extends React.Component {
  handleChange = evt => {
    evt.preventDefault();
    const input = evt.currentTarget;
    this.props.handleChange(input.value);
  };

  render() {
    return (
      <div className={css.div}>
        <p className={css.p}> Find contacts by name</p>
        <input
          onChange={this.handleChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
};
