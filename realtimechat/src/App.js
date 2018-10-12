import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import ChannelList from './components/ChannelList';
import MessageBox from './components/MessageBox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import firebase from 'firebase/app';
import { createMuiTheme } from '@material-ui/core/styles';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from './stores/ChatStore';
import Login from './component/Login'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});


class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyCQo96ZiXmh8Wm1DGdyEMFx5TPea_z7PEw",                             // Auth / General Use
      databaseURL: "https://react-chat-app-f9c57.firebaseio.com/", // Realtime Database
    });
    
  }
  static getStores(){
    return [ChatStore];
  }
  static getPropsFromStores(){
    return ChatStore.getState();
  }

  render() {
    var view = <Login />;

    if (this.props.user){
      view = (
        <div>
          <div>
          <div style={{
            display : 'flex',
            flexFlow : 'row wrap',
            maxWidth : 1200,
            width : '100%',
            margin : '30px auto 30px'
          }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
        </div>

        </div>
      );
    }
    return (
       

        <body>
          <div>
            <AppBar position="static">
              <Toolbar>
                  <Typography variant="title" color="inherit">
                    My Real Time Chat App
                  </Typography>
                </Toolbar>
            </AppBar>
            {{view}}
          </div>
        </body>
    );
  }
}

export default (connectToStores)(App);
