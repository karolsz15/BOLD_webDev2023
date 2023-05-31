import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import contactModel from '../../models/Contact.model';
import ContactForm from './contact-form';

const Contact = () => {

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2} color="black">
            {contactModel.heading}
          </Heading>
          <Text color="black">
            {contactModel.text}
          </Text>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
