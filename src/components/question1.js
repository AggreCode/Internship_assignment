import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,FormGroup, Col, Row ,Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';


class Question1 extends Component {

    constructor(props) {
        super(props);
  
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        
        this.props.postQuestion1({select:this.select.value});

    
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
                <div className="row">
                
                {this.props.question.isAuthenticated1?
                     <div> <h4>Hurray You passed ! Here is the link to your next question </h4>
                          <Link to='/question2'>Question2</Link>
                     </div>
                      
                        :
                        <div></div>
                   }
                </div>
          
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Question 1:-</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form model="answer" onSubmit={this.handleSubmit}>
            
                    <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect"
          innerRef={(input) => this.select = input} >
          <option>Home</option>
          <option>dine in</option>
          <option>Delivery</option>
         
        </Input>
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

export default Question1;