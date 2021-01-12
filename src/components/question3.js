import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,FormGroup, Col, Row ,Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';


class Question3 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleSubmit1() {
        
        this.props.postQuestion3({select:this.select.value});
  
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
                
                {this.props.question.isAuthenticated3?
                     <div> <h4>Hurray You passed ! Here is the link to your next question </h4>
                          <Link to='/question4'>Question4</Link>
                     </div>
                      
                        :
                        <div></div>
                   }
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Question 3:-</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form model="answer" onSubmit={this.handleSubmit1}>
            
                    <FormGroup>
        <Label for="exampleSelect">Which drink do you often order with your foodt</Label>
        <Input type="select" name="select" id="exampleSelect"
          innerRef={(input) => this.select = input} >
          <option>Thumbs Up</option>
          <option>Coca Cola</option>
          <option>Mirinda</option>
          <option>Fanta</option>
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

export default Question3;