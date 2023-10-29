
import img1 from '../Component/img/Library-images1.jpg'
import img2 from '../Component/img/Library-images2.jpeg'
import img3 from '../Component/img/Library-images3.jpg'

import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
        style={{ height: '400px' }}
          className="d-block w-100 "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
        <h5>First slide label</h5>
          <p>Opening line from "Pride and Prejudice" by Jane Austen: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '400px' }}
          className="d-block w-100"
          
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Opening line from "The Great Gatsby" by F. Scott Fitzgerald: "In my younger and more vulnerable years, my father gave me some advice that I've been turning over in my mind ever since."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '400px' }}
          className="d-block w-100"
          
          src={img3}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>Opening line from "To Kill a Mockingbird" by Harper Lee: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;