import React, { Component } from "react";

export default class  extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
 
  render() {
    return (
      <div>
        Hello World
        <p>{this.props.userAgent} </p>
      </div>
    )
  }
}