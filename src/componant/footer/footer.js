import React from "react"
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="footer">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-12">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>


            <div className="col-md-12 mb-md-0 mb-3">
                <h5 className="text-uppercase">contact us</h5>
                
                <ul className="list-unstyled">
                    <li><a href="#!">Facbook</a></li>
                    <li><a href="#!">Instagram </a></li>
                    <li><a href="#!">Email</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> FOOD.com</a>
    </div>
    </div>
</footer>

export default Footer