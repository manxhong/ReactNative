import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Animated} from 'react-native';

export default function render(styles){
    const doneAnimation = new Animated.ValueXY();

    const localStyle = StyleSheet.create({
        doneButton: {
            borderRadius: 5,
            padding: 5,
        },
    
        profilePic: {
            width: 52,
            height: 52,
        },
    
        row: {
            transform: doneAnimation.getTranslateTransform(),
        },
    });

    function animatedPress(){
        Animated.spring(doneAnimation,{
            tension: 2,
            friction: 3,
            toValue:{
                x: -500,
                y:0,
            }
        }).start();
        
        setTimeout(() => {
            this.onDonePressed();
        },1000);
        
    }

    return(
        <Animated.View style={[styles.container, localStyle.row]}>
            <Text 
            style={styles.label}
            >and: {this.props.todo.task}</Text>

            <TouchableHighlight
                style={localStyle.doneButton}
                onPress = {animatedPress.bind(this)}
                underlayColor="#ddd"
            >
                <Image
                    source={
                        require('../image/profilePic.png')}
                    style={localStyle.profilePic}
                />
                {/* <Text>Done</Text> */}
            </TouchableHighlight>
        </Animated.View>
    );
}