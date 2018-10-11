import React from 'react';
import Channel from './Channel';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';

class ChannelList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            channels : [
                "Channel1","Channel2","Sddsddsds","fsafsdg"
            ]
        };
    }

    render(){
        var channelNodes = this.state.channels.map((channel)=> {
            return (
                <Channel channel={channel} />
            );
        });

        return (
            <Card style={{
                flexGrow : 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;