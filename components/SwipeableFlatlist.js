import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, Dimensions, TouchableHighlight } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../config';

export default class SwipeableFlatlist extends Component{
    constructor(props){
        super(props);
        this.state={
            allNotifications: this.props.allNotifications
        }
    }
    updateMarkAsread= Notification=>{
        db.collection('all_notifications')
        .doc(notification.doc_id)
        .update({
            notification_status: 'read'
        })
    }
    onswipeValueChange=swipeData=>{
        var allNotifications= this.state.allNotifications
        const{key,value}=swipeData
        if(value<-Dimensions.get('window').width){
            const newData= [...allNotifications]
            this.updateMarkAsread(allNotifications[key])
            newData.splice(key,1)
            this.setState({
                allNotifications:newData
            })
        }
    }

    renderItem= data=>{
        <Animated.View>
            <ListItem
            leftElement={
                <Icon 
                name='book'
                type='font-awesome'
                color='#696969'
                />
            }
                title={
                    data.item.book_name
                }
          titleStyle={{color:'black', fontWeight:'bold'}}
          subtitle={
              data.item.message
          }
          bottomDivider
            />
        </Animated.View>
    }
    renderHiddenItems=()=>(
        <View style={styles .rowback}>
            <View style={[styles.backRightbutton, styles.backRightButtonRight]}>
        <Text style={styles.backTextWhite}>
        Mark As Read
        </Text>
            </View>
        </View>
    )
    render(){
        return(
            <View style={styles.container}>
                <SwipeListView
                disableRightSwipe
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get('window').width}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={this.onSwipeValueChange}
                keyExtractor={(    item,index )=>index.toString()}
                />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        flew:1
    },
    backTextWhite:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        alignSelf:'flex-start'
    },
    rowback:{
        alignItems:'center',
        backgroundColor:'#29E6F6',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15
    },
    backRightbutton:{
        alignItems:'center',
        bottom:0,
        justifyContent:'center',
        position:'absolute',
        top:0,
        width:100
    },
    backRightButtonRight:{
        backgroundColor:'#29E6F6',
        right:0

    }
})