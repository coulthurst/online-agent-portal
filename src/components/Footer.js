import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBNavLink, MDBAnimation } from "mdbreact";

import Logo from "../imgs/nmb_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="3">
          </MDBCol>
          <MDBCol md="6" className="text-center ">
        <MDBAnimation reveal type="fadeInUp">
            <h5 className="font-weight-bold">
              <span className="mr-3">CONNECT WITH US:</span>
              <a className="footer_icon" href="https://www.facebook.com/NMBLife/"><MDBIcon fab size="lg" icon="facebook-square" className="mx-2" /></a>
              <a className="footer_icon" href="https://www.instagram.com/nmblife/"><MDBIcon fab size="lg" icon="instagram" className="mx-2" /></a>
              <a className="footer_icon" href="https://www.linkedin.com/company/national-mutual-benefit/"><MDBIcon fab size="lg" icon="linkedin" className="mx-2" /></a>
              <a className="footer_icon" href="mailto:apauli@nmblife.org"><MDBIcon far size="lg" icon="envelope" className="mx-2" /></a>
            </h5>
        </MDBAnimation>
          </MDBCol>
          <MDBCol md="3">
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="text-center mt-4 mb-5">
        <MDBAnimation reveal type="fadeInUp">

            <img src={Logo} alt="NMB Logo" />
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
        <MDBAnimation reveal type="fadeInUp">

            <p className="text-center">
              National Mutual Benefit | 6522 Grand Teton Plaza | Madison WI
              53719-2912 | 1 (800) 779-1936 or 1 (608) 833-1936
            </p>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Footer;
