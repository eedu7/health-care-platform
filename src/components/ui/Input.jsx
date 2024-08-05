import PropTypes from 'prop-types';

export const Input = (props) => {
    const {type, name, placeholder, label, iconSrc} = props;
  return (
    <div className="my-4">
      <label htmlFor={name}>{label}</label>
      <div className="border border-gray-100 flex gap-4 p-4 mt-2 rounded-lg bg-gray-700 hover:border-green-400">
        <img src={iconSrc} alt="User Icon" />
        <input
        id={name ? name : ""}
        name={name ? name : ""}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          className="bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired
}