import React, { Component } from 'react';
import axios from 'axios';
import DjangoCSRFToken from 'django-react-csrftoken';
import { domain, domain1 } from '../env';
import { withRouter } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }
    changeNow = (event) => {
        var inputField = event.target.name;
        var inputValue = event.target.value;
        this.setState({ [inputField]: inputValue });
    }
    connection = async () => {

        await axios({
            // url: `${domain}/api/contacts/`,
            url: `${domain1}/api/contacts/`,
            method: 'POST',
            data: {
                'name': this.state.name,
                'email': this.state.email,
                'message': this.state.message,

            }
        }).then(response => {
            console.log('Messages====', response.data);
            alert(response.data['response']);
            this.props.history.push("/")
        })
    }
    render() {
        return (
            <div className="text-white">
                <div style={{ paddingTop: "100px", paddingBottom: "100px", }} >
                    <h2 className="text-white text-center  mb-5">Contact With Me</h2>
                    <div className="container">
                        <form method="post" encType="text/plain" >
                            <DjangoCSRFToken />
                            <div class="row m-0" >
                                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                                    <div class="form-group text-left">
                                        <label for="name">Name</label>
                                        <input required type="text" style={{ background: "none" }} name="name" className="form-control  text-white" placeholder="Enter your name here" onChange={this.changeNow} />
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="email">Email address</label>
                                        <input type="email" onChange={this.changeNow} name="email" style={{ background: "none" }} placeholder="Enter your email here" className="form-control  text-white" id="email" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                                    <div class="form-group text-left">
                                        <label for="message">Message</label>
                                        <textarea class="form-control text-white" style={{ background: "none" }} name="message" onChange={this.changeNow} id="message" rows="5" placeholder="Put your message here"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12">

                                    <button type="button" style={{ backgroundColor: "#0bbba0", border: "#0bbba0" }} className="btn-block btn text-white btn-lg mt-2"
                                        onClick={this.connection} >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(contact);