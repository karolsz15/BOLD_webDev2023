import './index.css';
import React, {useState} from 'react';
import FormInput from '../../../components/formInput';
import Button from '../../../components/button'

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');

    const isSubmitButtonEnabled = () => firstName && lastName && phoneNumber && service;
  
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
    };

  return (
    <form className="contact-form" onSubmit={e=> handleSubmit(e)}>
        <div className='name-container'>
            <FormInput 
                type='text'
                name='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder='First Name'
                required
            />
            <FormInput 
                type='text'
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder='Last Name'
                required
            />
        </div>
        <FormInput 
            type='tel'
            name='phoneNumber'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder='Phone Number'
            required
            style='full'
        />
        <FormInput 
            type='text'
            name='service'
            value={service}
            onChange={e => setService(e.target.value)}
            placeholder='What Service are you interested in?'
            required
            style='full'
        />
        <Button 
            ariaLabel='Submit'
            text='SUBMIT NOW' 
            type='submit' 
            version='secondary' 
            isDisabled={!isSubmitButtonEnabled()} 
        />
    </form>
  );
};

export default ContactForm;
