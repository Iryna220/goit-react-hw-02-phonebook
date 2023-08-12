const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="name" name="filter" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
