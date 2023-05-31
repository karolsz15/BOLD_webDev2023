import './index.css';

/**
 * A custom button component with a link (optional), text, button 'type' attribute, styling version, isDisabled flag.
 * 
// 
* @param {string} link - The string containing link adress for an a tag (optional, only if the Button is supposed to be a hyperlink).
 * @param {string} text - The string to be displayed on the button.
 * @param {string} type - Type attribute of HTML button element e.g. button, submit, reset.
 * @param {string} version - Styling version of the Button component. Different styles are applied depending on this value. Currently supported: 'primary' and 'secondary'.
 * @param {boolean} isDisabled - A boolean value indicating whether the button should be disabled (true) or enabled (false).
 * @returns {JSX.Element} - The rendered Button component.
 */

const Button = ({link,text,type,version,isDisabled=false}) => {

  const className = `btn ${version === 'primary' ? 'primary' : 'secondary'}`;

  // tried to do it with ternary operator, not sure why it doesn't work?
  // e.g link ? (<a href={link}>...</a>) : (<button>...</button>)

  if (link) { 
    return (
    <a href={link}>
      <button type={type} className={className} disabled={isDisabled}>
        {text}
      </button>
    </a>
  )
} else {
  return (
    <button type={type} className={className} disabled={isDisabled}>
      {text}
    </button>
    );
  };
};

export default Button;
