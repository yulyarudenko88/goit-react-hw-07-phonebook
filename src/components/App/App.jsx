import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components/Section/Section';
import { AddContactsForm } from 'components/AddContactsForm/AddContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Section title="Phonebook">
        <AddContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
        {isLoading && !error && <Loader />}
        {!isLoading && error && <p>Sorry, but something go wrong...</p>}
      </Section>
    </Wrapper>
  );
};
