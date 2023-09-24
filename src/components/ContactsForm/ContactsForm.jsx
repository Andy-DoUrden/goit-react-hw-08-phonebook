import { useState } from 'react';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import shortid from 'shortid';

import {
  Form,
  InputBlock,
  InputName,
  NewContactValue,
  AddContact,
} from './ContactsForm.styled';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (existingContact) {
      toast.error(`${name}: is already in contacts`);
      return;
    }

    dispatch(addContact({ id: shortid.generate(), name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <InputName>Name:</InputName>
        <NewContactValue
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
      </InputBlock>

      <InputBlock>
        <InputName>Number:</InputName>
        <NewContactValue
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
      </InputBlock>

      {isLoading ? (
        <Oval
          height={60}
          width={60}
          color="#f2ab26"
          wrapperStyle={{}}
          wrapperClass="loaderMargin"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#f2ab26"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <AddContact>Add contact</AddContact>
      )}
    </Form>
  );
};

export default ContactsForm;
