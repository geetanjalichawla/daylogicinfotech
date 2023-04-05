import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/b80sh2n2k/premium_photo-1677872479743-fbba85e09418_ixlib_rb-4.0.3_ixid_MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8_auto_format_fit_crop_w_2070_q_80?updatedAt=1680690196982"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://ik.imagekit.io/b80sh2n2k/premium_photo-1677872479743-fbba85e09418_ixlib_rb-4.0.3_ixid_MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8_auto_format_fit_crop_w_2070_q_80?updatedAt=1680690196982"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/b80sh2n2k/premium_photo-1677872479743-fbba85e09418_ixlib_rb-4.0.3_ixid_MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8_auto_format_fit_crop_w_2070_q_80?updatedAt=1680690196982"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;