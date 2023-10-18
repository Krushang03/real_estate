import React from 'react'
import "../Style/contact.css"
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md';
import { BiTime, BiLogoGmail } from 'react-icons/bi';

const Contact = () => {
  return (
    <div>
      <>
        <div className='contact'>
          <div className='dark-back d-flex justify-content-center'>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <div className='contact-info'>
                <div className='con-address mt-2'>
                  <FaLocationDot className='con-icon me-3' />
                  <div className='d-flex flex-column'>
                    <h4>Location:</h4>
                    <p>43 Raymouth Rd. Baltemoer,London 3910</p>
                  </div>
                </div>
                <div className='con-hours mt-2'>
                  <BiTime className='con-icon me-2' />
                  <div className='d-flex flex-column'>
                    <h4>Open Hours:</h4>
                    <p className='mb-0'>Sunday-Friday:</p>
                    <p>11:00 AM - 2300 PM</p>
                  </div>
                </div>
                <div className='con-email mt-2'>
                  <BiLogoGmail className='con-icon me-2' />
                  <div className='d-flex flex-column'>
                    <h4>Email:</h4>
                    <p className='mb-0'>nfo@Untree.co</p>
                  </div>
                </div>
                <div className='con-email mt-4'>
                  <MdCall className='con-icon me-2' />
                  <div className='d-flex flex-column'>
                    <h4>Call:</h4>
                    <p className='mb-0'>+91 12345 54885</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <form>
                <div className='row'>
                  <div className='col-6 mb-3'>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                      <label for="floatingInputGroup1">Your Name</label>
                    </div>
                  </div>
                  <div className='col-6 mb-3'>
                    <div class="form-floating">
                      <input type="email" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                      <label for="floatingInputGroup1">Your Email</label>
                    </div>
                  </div>
                  <div className='col-12 mb-3'>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                      <label for="floatingInputGroup1">Subject</label>
                    </div>
                  </div>
                  <div className='col-12 mb-3'>
                    <div class="form-floating">
                      <textarea type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" style={{ height: "165px" }} />
                      <label for="floatingInputGroup1">Message</label>
                    </div>
                  </div>
                </div>
                <button className="btn-message" type="submit">Send-Message</button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>

  )
}

export default Contact