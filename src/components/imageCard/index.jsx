import Image from '../image'
import Heading from '../heading';
import Text from '../text';
import './index.css'
import Button from '../button';


const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button 
          ariaLabel='Link'
          className='imageCard__link'
          link={link}
          rel='external'
          target='_blank'
          text='Read More' 
          type='button' 
          version='primary' 
        />
      </div>
    </div>
  )
};

export default ImageCard;
