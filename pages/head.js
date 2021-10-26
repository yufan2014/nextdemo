import React, { Component } from "react";
import Head from 'next/head'


export default () => <div>
  <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
  </Head>
  <Head>
    <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
  </Head>
  <p>Hello world!</p>
  <img src="https://img1.baidu.com/it/u=3084848274,1530529668&fm=26&fmt=auto" alt="my image" />
</div>