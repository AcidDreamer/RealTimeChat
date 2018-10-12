import React , { Component } from 'react';
import { Card , CardText , RaisedButton, CardActions } from '@material-ui/core';
import Actions from '../actions';

class Login extends Component{
    onClick(){
        Actions.login();
        console.log('Logging in');
    }

    render(){
        return(
            <Card style={{
                'maxWidth' : '800px',
                'margin' : 'auto',
                'padding' : '50px'
            }}>
                <CardText style={{
                    'textAlign' : 'center'
                }}>
                    To start chatting away , please login in with your google account
                </CardText>
                <RaisedButton style={{
                    'display' : 'block',
                }} onClick={this.onClick.bind(this)} label="Log in with google"/>
            </Card>
        );
    }
}

export default Login;