import './index.css';
import FormInput from '../../../components/formInput';
import React, {useState} from 'react';
import Button from '../../../components/button'

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');
    // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  
    const handleSubmit = event => {
      event.preventDefault();
  
      alert(`Data with following data has been sent: 
      First Name: ${firstName} 
      Last Name: ${lastName} 
      Phone Number: ${phoneNumber} 
      Service of interest: ${service}`);
    
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setService('');
      setIsSubmitDisabled(true);
    };

  return (
    <form className="contact-form" onSubmit={event=> handleSubmit(event)}>
        <div className='name-container'>
            <FormInput 
                // className='firstName'
                type='text'
                // id={name}
                // name={name}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder='First Name'
                required
                // disabled={disabled}
            />
            <FormInput 
                // className='lastName'
                type='text'
                // id={name}
                // name={name}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder='Last Name'
                required
                // disabled={disabled}
            />
        </div>
        <FormInput 
            // className={formStyle}
            type='tel'
            // id={name}
            // name={name}
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder='Phone Number'
            required
            // disabled={disabled}
            style='full'
        />
        <FormInput 
            // className={formStyle}
            type='text'
            // id={name}
            // name={name}
            value={service}
            onChange={e => setService(e.target.value)}
            placeholder='What Service are you interested in?'
            required
            // disabled={disabled}
            style='full'
        />
        <Button 
            text='SUBMIT NOW' 
            type='submit' 
            version='secondary' 
            isDisabled={!(firstName && lastName && phoneNumber && service)} 
        />
    </form>
  );
};

export default ContactForm;
