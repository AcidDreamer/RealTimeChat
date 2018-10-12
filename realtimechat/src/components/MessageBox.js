import React from 'react';
import { Card } from '@material-ui/core';
import trim from 'trim';
import firebase from 'firebase/app';
require('firebase/database');

class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : ""
        }   
        this.ref = firebase.database().ref("messages");
    }
    
    onChange(evt){
        this.setState({
            message : evt.target.value
        });
    }

    onKeyUp(evt){
        if(evt.keyCode === 13 && trim(evt.target.value) != ""){
            evt.preventDefault();
            this.setState({
                message : ''
            });
            this.ref.push({
                author : 'Acid',
                profilePic : 'https://scontent-lga3-1.cdninstagram.com/vp/4e3fc853d15dd1977e0f18a2b2dbfbeb/5C5AF59C/t51.2885-15/e35/33860237_587959174922056_8680088901890605056_n.jpg',
                date : new Date(),
                message : this.state.message
            })
            evt.target.value = '';
        }
    }

    render(){
        return(
            <Card style={{
                maxWidth : 1200,
                margin : '30px auto',
                padding : 30
            }}>
                <textarea 
                    onChange = {this.onChange.bind(this)}
                    onKeyUp = {this.onKeyUp.bind(this)}
                    style={{
                        width : '100%',
                        borderColor : '#D0D0D0',
                        resize : 'none',
                        borderRadius : 3,
                        minHeight : 50,
                        color : '#550',
                        fontSize : 14,
                        outline : 'auto 0px'
                    }}
                />

            </Card>
        );
    }
}

export default MessageBox;

