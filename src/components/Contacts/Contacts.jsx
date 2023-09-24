import {
  Container,
  ContactsContainer,
  Title,
  ListTitle,
} from './Contacts.styled';

import ContactsForm from 'components/ContactsForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

const Contacts = () => {
  return (
    <Container>
      <ContactsContainer>
        <Title>Phonebook</Title>

        <ContactsForm />

        <ListTitle>Contacts</ListTitle>

        <Filter />

        <ContactsList />
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
