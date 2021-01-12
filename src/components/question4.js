import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,FormGroup, Col, Row ,Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';


class Question4 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleSubmit1() {
        
       alert('you have successfully submitted');
        
    }

    render() {
        return(
            <div className="container">
                
                <div className="row">
                   
                    <div className="col-12">
                        <h3>Answer The question</h3>
                        <hr />
                    </div>
                </div>
          
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Question 4:-</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form model="answer" onSubmit={this.handleSubmit1}>
            
                    <FormGroup>
        <Label for="exampleSelect">What do you like about the drink you selected in the previous question?</Label>
        <Input type="text" name="select" id="exampleSelect"
          innerRef={(input) => this.select = input} />
          
       
      </FormGroup>
      <Button type="submit" color="primary">
                                    Register
                                    </Button>
                    
            
           </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Question4;