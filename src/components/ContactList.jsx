import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
