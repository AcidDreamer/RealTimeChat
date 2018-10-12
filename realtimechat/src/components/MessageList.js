import React from 'react';
import Message from './Message';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import firebase from 'firebase/app';
import _ from 'lodash';
require('firebase/database');

class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages : {}
            
        };

        this.ref = firebase.database().ref("messages");
        this.ref.on("child_added" , (msg) => {
            if (this.state.messages[msg.key]){
                return;
            }
            let msgVal = msg.val();
            msgVal.key = msg.key;
            this.state.messages[msgVal.key] = msgVal;
            this.setState({messages : this.state.messages});
        });

        this.ref.on("child_removed", (msg) => {
            var key = msg.key;
            delete this.state.messages[key];
            this.setState({messages : this.state.messages});
        });
    }

    render(){
        var messageNodes = _.values(this.state.messages).map((messagesObj)=> {
            return (
                <Message 
                message={messagesObj.message} 
                profilePic = {messagesObj.profilePic}
                />
            );
        });

        return (
            <Card style={{
                flexGrow : 4,
                marginLeft : '30px'
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;