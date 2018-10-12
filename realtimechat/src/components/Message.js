import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import { ListItemAvatar, Avatar , ListItemText } from '@material-ui/core';

class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListItem>
            <Avatar alt="Remy Sharp" src={this.props.profilePic} />
                <ListItemText>
                    {this.props.message}
                </ListItemText>
            </ListItem>
        );
    }
}

export default Message;

