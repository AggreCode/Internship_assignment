import React, { Component } from 'react';

import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  postQuestion1,  postQuestion2, postQuestion3} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
    question: state.question
    }
}

const mapDispatchToProps = (dispatch) => ({
 
 
  postQuestion1: (creds) => dispatch(postQuestion1(creds)),
  postQuestion2: (creds) => dispatch(postQuestion2(creds)),

  postQuestion3: (creds) => dispatch(postQuestion3(creds))


});

class Main extends Component {

 

  render() {

  
    return (
      <div>
      
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/question1" component={()=><Question1 postQuestion1={this.props.postQuestion1} question={this.props.question}/>} />
              <Route path="/question2" component={()=><Question2 postQuestion2={this.props.postQuestion2}  question={this.props.question}/>} />
              <Route path="/question3" component={()=><Question3 postQuestion3={this.props.postQuestion3}   question={this.props.question}/>} />
              <Route path="/question4" component={()=><Question4 />} />
              <Redirect to="/question1" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
