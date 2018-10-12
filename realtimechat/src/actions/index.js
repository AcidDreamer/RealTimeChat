import alt from '../alt';
import firebase from 'firebase/app';

class Actions{

    login(args){
        return (dispatch) => {
            var ref = firebase;
            ref.authWithOAuthPopup("google", (error,user) => {
                if (error){
                    return;
                }
                dispatch(user);
            });
        }
    }
}

export default alt.createActions(Actions);