import React, { Component } from "react";

// export default class  extends React.Component {
//   static async getInitialProps({ req }) {
//     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//     return { userAgent }
//   }
 
//   render() {
//     return (
//       <div>
//         Hello World
//         <p>{this.props.userAgent} </p>
//       </div>
//     )
//   }
// }

const Page = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>
 
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
 
export default Page