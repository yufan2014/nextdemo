import Link from 'next/link'
import { withRouter } from 'next/router';

const sports = ({router}) =>
  <div>
    <a>您选择的是  {router.query.name}</a>
    <p></p>
    <Link scroll={false} href="/router_events"><a>返回首页</a></Link>
  </div>


export default withRouter(sports)