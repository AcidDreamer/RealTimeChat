import React from 'react';
import { ListItem , ListItemText } from '@material-ui/core';

class Channel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListItem>
                <ListItemText>
                    {this.props.channel}
                </ListItemText>
            </ListItem>
        );
    }
}

export default Channel;

