import React from "react";
import "./styles/index.css";

const Footer = () => {
  return (
    <section className="row footer__wrapper justify-content-center">
      <div className="col-md-6 col-lg-8">
        <div className="row">
          <div className="col-md-12 justify-center">
            <div className="dsc__spree__footer">Hackerspree</div>
            <div className="spree__footer__links">
              <div className="spree__footer__link">
                <a href="https://docs.google.com/document/d/1PRlDn34MMqXWj11neUfUzoO88GsaDiY45b8hMh3sYfo/edit?usp=sharing" rel="noopener" target="_blank">
                  Code Of Conduct
                </a>
              </div>
              <div className="spree__footer__link">
                <a href="https://developers.google.com/community/dsc" rel="noopener" target="_blank">
                  Community Guidelines
                </a>
              </div>
            </div>

            <div className="copyright">
                © Hackerspree 2020
              </div>
            
          </div>
        </div>
      </div>

      <table className="col-lg-2 col-10 mt-3 social__links">
              <tr>
                <td>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-twitter "></i>
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-instagram rounded"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </td>
              </tr>
            </table>
    </section>
  );
};

export default Footer;
