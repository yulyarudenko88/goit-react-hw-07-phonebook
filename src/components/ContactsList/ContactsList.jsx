import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import {  selectVisibleContacts } from 'redux/contacts/selectors';
// import { selectFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { Contact } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  // const { filter } = useSelector(selectFilter);
  // console.log(contacts)

  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <Contact key={id}>
          <FiUser />
          {name}: {number}
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </Contact>
      ))}
    </ul>
  );
};
