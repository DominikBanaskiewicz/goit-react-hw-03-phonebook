import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import React from 'react';

export class ContactList extends React.Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <ul>
        {contacts.map(elem => (
          <li className={css.list__elem} key={elem.id}>
            <span className={css.name}>{elem.name}</span>
            <span className={css.number}>{elem.number}</span>
            <button
              className={css.button}
              type="Button"
              onClick={() => onRemoveContact(elem.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

// niżej działający komponent funkcyjny

// import React from 'react';
// export const ContactList = ({ contacts, onRemoveContact }) => {
//   return (
//     <>
//       <ul>
//         {contacts.map(elem => (
//           <li className={css.list__elem} key={elem.id}>
//             <span className={css.name}>{elem.name}</span>
//             <span className={css.number}>{elem.number}</span>
//             <button
//               className={css.button}
//               type="Button"
//               onClick={() => onRemoveContact(elem.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   removeContact: PropTypes.func,
// };
