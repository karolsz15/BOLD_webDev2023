import './index.css';

/**
 * A custom button component with an ariaLabel, <a> link attribute, <a> rel attribute, <a> target attribute, 
 * text, <button> type attribute, styling version, isDisabled flag.
 * @param {string} ariaLabel - - The string containing aria-label attribute for an a tag (e.g. external, author)
 * @param {string} link - The string containing link adress for an a tag (e.g. www.bold.com).
 * @param {string} rel - The string containing rel attribute for an a tag (e.g. external, author).
 * @param {string} target - The string containing target attribute for an a tag (e.g. _blank).
 * @param {string} text - The string to be displayed on the button (e.g. SUBMIT NOW).
 * @param {string} type - Type attribute of HTML button element (e.g. button, submit).
 * @param {string} version - Styling version of the Button component. Different styles are applied depending on this value. 
 * Currently supported: 'primary' and 'secondary'.
 * @param {boolean} isDisabled - A boolean value indicating whether the button should be disabled (true) or enabled (false).
 * @returns {JSX.Element} - The rendered Button component.
 */

const Button = ({ariaLabel,link,rel,target,text,type,version,isDisabled}) => {

  const className = `btn ${version === 'primary' ? 'primary' : 'secondary'}`;

  return link ? (
    <a href={link} target={target} rel={rel}>
      <button aria-label={ariaLabel} type={type} className={className} disabled={isDisabled}>
        {text}
      </button>
    </a>
  ) : (
    <button aria-label={ariaLabel} type={type} className={className} disabled={isDisabled}>
      {text}
    </button>
    );
};

export default Button;
