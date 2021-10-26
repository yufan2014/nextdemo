import React from 'react'
import Link from 'next/link'
import Router from 'next/router'  
 
const Home = () => {//圆括号表示只有返回值没有业务逻辑，有业务逻辑用大括号
 
    /**6个钩子事件
    routeChangeStart
    routerChangeComplete
    beforeHistoryChange
    routeChangeError
    hashChangeStart
    hashChangeComplete*/
    //路由开始变化
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart->路由开始变化，参数为：',...args)
    })
    //路由变化结束
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2.routeChangeComplete->路由变化结束，参数为：',...args)
    })
    //Next.js全部都用History模式
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3.beforeHistoryChange，参数为：',...args)
    })
    //路由发生错误时，404不算
    Router.events.on('routeChangeError',(...args)=>{
        console.log('4.routeChangeError->路由发生错误，参数为：',...args)
    })
    //Hash路由切换之前
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5.hashChangeStart，参数为：',...args)
    })
    //Hash路由切换完成
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6.hashChangeComplete，参数为：',...args)
    })
 
    function gotoSport(){
        Router.push({
            pathname:'/sport',
            query:{name:'篮球'}
        })
        // 同以下：
        // Router.push('/sport?篮球')
    }
 
    return (
        <>
            <div>我是首页</div>
            <div>
                <Link href={{pathname:'/sport',query:{name:'篮球'}}}><a>选择篮球</a></Link>
                <br/>
                <Link href="/sport?name=羽毛球"><a>选择羽毛球</a></Link>
            </div>
            <div>
                <button onClick={gotoSport}>选篮球</button>
            </div>
        </>
    )
}
 
export default Home