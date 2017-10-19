import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import AppTabNav from './appTabNav'
import Search from './views/search'
import KnowAll from './views/knowAll'
import KnowAllDetail from './views/knowAllDetail'
import PeopleShow from './views/peopleShow'
import Login from './views/login'
import Register from './views/register'
import MySetting from './views/mySetting'
import Message from './views/message'
import AboutUs from './views/aboutUs'
import AddAsk from './views/addAsk'
import AddOnAsk from './views/addOnAsk'
import AskDetail from './views/askDetail'
import Subject from './views/subject'
import AboutDetail from './views/aboutDetail'
import ChangePassword from './views/changePassword'
import ForgetPassword from './views/forgetPassword'
import Test from './views/test'
import Rescue from './views/rescue'
import Tech from './views/tech'
const appRootStackNav = StackNavigator({
    TabNav: {
        screen: AppTabNav
    },
    Login:{
        screen: Login
    },
    Register:{
        screen: Register
    },
	ChangePassword:{
		screen: ChangePassword
	},
	ForgetPassword:{
		screen: ForgetPassword
	},
    Search: {//搜索页
        screen: Search
    },
    Test:{//教育培训
        screen:Test
    },
    KnowAll:{//消防百事通
        screen: KnowAll
    },
    KnowAllDetail:{//消防百事通详情页
        screen: KnowAllDetail
    },
    PeopleShow:{//真人秀
        screen: PeopleShow
    },
    Message:{//消息中心
        screen:Message
    },
    MySetting:{//个人设置
        screen:MySetting
    },
    AboutUs:{//关于我们
        screen:AboutUs
    },
    AddAsk:{//添加问题
        screen:AddAsk
    },
    AddOnAsk:{//追加问题
        screen:AddOnAsk
    },
    AskDetail:{//咨询详情页
        screen:AskDetail
    },
    Subject:{//答题
        screen:Subject
    },
    AboutDetail:{//关于详情页
        screen:AboutDetail
    },
    Rescue:{//救援
        screen:Rescue
    },
    Tech:{
        screen:Tech
    }
}, {
    headerMode: 'none'
})

export default appRootStackNav
