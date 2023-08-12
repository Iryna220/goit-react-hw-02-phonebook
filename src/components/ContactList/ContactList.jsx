import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
