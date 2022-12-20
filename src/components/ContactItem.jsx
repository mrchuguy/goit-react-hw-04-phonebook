import PropTypes from 'prop-types';

export const ContactItem = ({ item, onDelete }) => {
  return (
    <li>
      {item.name}: {item.number}
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
