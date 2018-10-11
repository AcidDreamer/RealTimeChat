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
            <Avatar alt="Remy Sharp" src="https://scontent-lga3-1.cdninstagram.com/vp/4e3fc853d15dd1977e0f18a2b2dbfbeb/5C5AF59C/t51.2885-15/e35/33860237_587959174922056_8680088901890605056_n.jpg" />
                <ListItemText>
                    {this.props.message}
                </ListItemText>
            </ListItem>
        );
    }
}

export default Message;

