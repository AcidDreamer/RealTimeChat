import React from 'react';
import Message from './Message';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages : [
                "asdasda","asdasda","Sddsddsds","fsafsdg"
            ]
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <Message message={message} />
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