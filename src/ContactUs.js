import React from "react";
import LogoAlt from "./asset/img/logo-ALTA-v2@2x.png";
import "./asset/css/bootstrap.min.css";
import "./asset/js/bootstrap.min.js";
import "./asset/css/form.css";
import "./asset/css/main.css";
import logoFb from "./asset/img/ic_fb@2x.png";
import logoTw from "./asset/img/ic-twitter@2x.png";
import logoIg from "./asset/img/ic-instagram@2x.png";
import logoIn from "./asset/img/ic-linkedin@2x.png";
import LogoAlta2 from "./asset/img/logo-ALTA-v2.png";

const ContactUs = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row d-flex align-items-center">
          <div class="col-md-4 form-img">
            <div class="kotak w-100 text-center">
              <img class="alta" src={LogoAlt} alt="LogoAlta" />
            </div>
          </div>
          <div class="col-md-8 isi-form">
            <div></div>
            <h3>Contact Us</h3>
            <form>
              <div class="form-group rincian-form">
                <label for="nama" class="required">
                  Full Name
                </label>
                <input
                  type="fullname"
                  class="form-control"
                  id="namalengkap"
                  placeholder="Your Full Name Here..."
                />
              </div>
              <div class="form-group rincian-form">
                <label for="alamatemail" class="required">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailbaru"
                  aria-describedby="emailHelp"
                  placeholder="example@domail.com"
                />
              </div>
              <div class="form-group rincian-form">
                <label for="telepon" class="required">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phonenumber"
                  aria-describedby="nomorbaru"
                  placeholder="08573890xxxxx"
                />
              </div>
              <div class="form-group rincian-form">
                <label for="kewarganegaraan">Nationality</label>
                <select class="form-control">
                  <option>Selected</option>
                </select>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="message"
                  ></textarea>
                </div>
              </div>
              <input type="submit" class="tombol" value="Submit" />
            </form>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="row pt-5 pb-5">
            <div class="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
              <a href="index.html">
                <img class="logo-bawah" src={LogoAlta2} alt="Logo Alta" />
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
              <h6>Social Media:</h6>

              <a href="https://www.facebook.com/AlterraAcademy">
                <img class="logo-sosmed" src={logoFb} alt="Logo Facebook" />
              </a>

              <a href="https://twitter.com/">
                <img class="logo-sosmed" src={logoTw} alt="Logo Twitter" />
              </a>

              <a href="https://www.instagram.com/alterra.academy/">
                <img class="logo-sosmed" src={logoIg} alt="Logo Instagram" />
              </a>

              <a href="https://id.linkedin.com/">
                <img class="logo-sosmed" src={logoIn} alt="Logo Linkin" />
              </a>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
              <h6 class="text-lg-right text-md-center text-sm-center kopi">
                Copyleft © 2019 - Unjelas Team
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
