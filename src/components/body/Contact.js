import React, {Component} from 'react';
import {Button,Form,FormGroup,Label,Input,Col} from 'reactstrap';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      telnum:"",
      email:"",
      agree:false,
      contactType:'Tel.',
      message:""
    }
  }
  render(){
    return(
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Us Feedback</h3>          

          </div>
          <div className="col-12">
            <Form>
              <FormGroup row>
                <Label html For="firstname" md={2}>First Name</Label>
                  <Col md={10}>
                    <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname}/>
                  </Col>
                
              </FormGroup>

              <FormGroup row>
                <Label html For="lastname" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}/>
                  </Col>
                
              </FormGroup>

              <FormGroup row>
                <Label html For="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                    <Input type="tel" name="telnum" placeholder="Tel. Num" value={this.state.telnum}/>
                  </Col>
                
              </FormGroup>

              <FormGroup row>
                <Label html For="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" name="email" placeholder="Email" value={this.state.email}/>
                  </Col>
                
              </FormGroup>

              <FormGroup>
                <Col md={{size:6,offset:2}}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="agree" checked={this.state.agree}/> <strong>May we contact you</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <col md={{size:3,offset:1}}>
                  <Input type="select" name="contactType" value={this.state.contactType}>
                  <option>Tel.</option>
                  <option>Email</option>
                  </Input>
                </col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feddback</Label>
                <Col md={10}>
                  <Input type="textarea" name="message" placeholder="Write Message" value={this.state.message} rows="12">
                    </Input>
                </Col>
              </FormGroup>

              <FormGroup>
                <col md={{size:10,offset:2}}>
                  <Button type="submit" color="primary" >Send Feedback</Button>
                </col>
              </FormGroup>

              

            </Form>

          </div>

        </div>

      </div>
      );
  }
}
export default Contact;