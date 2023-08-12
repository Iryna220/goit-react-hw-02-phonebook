const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name} {number}
      </p>
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
