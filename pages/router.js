import Router from 'next/router'

const handler = ()=>{
    Router.push({
        pathname:'/about',
        query:{name:'nicai'}
    },"show_path")
}


const handleRouteChange = url => {
    console.log('App is changing to: ', url)
  }
Router.events.on('routeChangeStart', handleRouteChange)

// Router.events.off('routeChangeStart', handleRouteChange)

Router.events.on('routeChangeError', (err, url) => {
    if (err.cancelled) {
      console.log(`Route to ${url} was cancelled!`)
    }
  })



 
export default () =>
  <div>
    Click <span onClick={() => Router.push('/about','/nicai')}>here</span> to read more<p></p>
    Click <span onClick={handler}>here</span> to read more
  </div>