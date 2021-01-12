import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row ,FormGroup,Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';



class Question2 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      
        this.props.postQuestion2({select:this.select.value});
  
    }

    render() {
        return(
            <div className="container">
                 <div className="row">
                
                {this.props.question.isAuthenticated2?
                     <div> <h4>Hurray You passed ! Here is the link to your next question </h4>
                          <Link to='/question3'>Question3</Link>
                     </div>
                      
                        :
                        <div></div>
                   }
                </div>
              
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Question 2:-</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form model="answer" onSubmit={this.handleSubmit}>
            
                    <FormGroup>
        <Label for="exampleSelect">How do you order online</Label>
        <Input type="select" name="select" id="exampleSelect"
          innerRef={(input) => this.select = input} >
          <option>zomato</option>
          <option>swiggy</option>
          
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

export default Question2;