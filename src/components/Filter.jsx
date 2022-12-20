import { Input, Title } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
