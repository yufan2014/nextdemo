import axios from "axios";
import React, { Component } from "react";


export default class Films extends Component {

    static async getInitialProps() {
        const res = await axios.get(
            'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4515946',
            {
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }

            });
        // console.log(res.data.data.films);
        return { films: res.data.data.films }
    }

    render(){
        return (
            <div>
                <title>测试</title>
                <ul>
                    {
                        this.props.films.map(item=>{
                            return <li key={item.filmId}>
                            {item.name}
                            <br/><img src={item.name}></img>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}