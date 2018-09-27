import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";

// import firebase from 'react-native-firebase';


class Notifications extends Component {
    constructor() {
        super()
        this.state = {
            avatarSource: "https://www.zent.com/images/userProfileIcon_gray.png",
            videoSource: null
        };
    }



      
    
    render() {
        return (
            <View style={styles.container} >
                

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    prfilePic: {
        backgroundColor: "#a10000",
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5

    },
    prfiileDataContainer: {
        backgroundColor: "#fff",
        flex: 2,
        justifyContent: "center",
    },
    cameraBtn: {
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "center",
        borderRadius: 50,
        marginTop: -60,
        marginLeft: 150
    }


})


// const mapStateToProp = (state) => {
//     return ({
//         currentUserobj: state.root
//     });
// };
// const mapDispatchToProp = (dispatch) => {
//     return {
//         currentUser: (data) => {
//             dispatch(currentUser(data))
//         }
//     };
// };
export default (Notifications)


// connect(mapStateToProp, mapDispatchToProp)