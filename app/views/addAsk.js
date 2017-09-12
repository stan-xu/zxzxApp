import React, {Component} from 'react'
import {View, TouchableOpacity, ImageBackground, Text, TextInput, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import {NavigationActions} from 'react-navigation'

class AddAsk extends Component {

    publishFun(){
        const {dispatch} = this.props
        
    }

    render() {
        const {dispatch} = this.props
        return (
            <View style={styles.rootView}>
                <ImageBackground source={require('../asset/add_bg.jpg')} style={styles.imageBg}>
                    <View style={styles.header}>
                        <Text style={styles.button} onPress={()=>{dispatch(NavigationActions.back())}}>取消</Text>
                        <Text style={styles.title}>发起问题</Text>
                        <Text style={styles.button} onPress={()=>{this.publishFun()}}>发布</Text>
                    </View>
                    <View style={styles.titleView}>
                        <TextInput style={styles.titleInput} placeholder='标题' placeholderTextColor='#595959' multiline={true} numberOfLines={2} maxLength={18} underlineColorAndroid="transparent"/>
                        <Text style={styles.tip}>请不要超过18个字</Text>
                    </View>
                    <TextInput style={styles.textInput} placeholder='正文' placeholderTextColor='#777' multiline={true} numberOfLines={10} textAlignVertical='top' maxLength={200} underlineColorAndroid="transparent"/>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootView:{
        flex:1,
        backgroundColor:'#ce2626'
    },
    imageBg:{
        marginTop:20,
        flex:1,
        width:'100%'
    },
    header:{
        flexDirection:'row',
        backgroundColor:'transparent',
        width:'100%',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
    },
    title:{
        fontSize:20,
        color:'#1f1f1f'
    },
    button:{
        fontSize:12,
        color:'#c2990c',
        width: 50,
        textAlign:'center'
    },
    titleView:{
        flexDirection:'row',
        marginTop:30,
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
    },
    titleInput:{
        flex:1,
        fontSize:20,
        marginLeft:10
    },
    tip:{
        backgroundColor:'transparent',
        color:'#ed612a',
        fontSize:12,
        marginRight:10
    },
    textInput:{
        marginTop:10,
        marginHorizontal:10,
        fontSize:12,
    }
})

const mapStateToProps = store=>({
    nav:store.nav
})

export default connect(mapStateToProps)(AddAsk)
