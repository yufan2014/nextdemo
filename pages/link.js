// pages/index.js
import Link from 'next/link'


// export default () =>
//   <div>
//     Click{' '}
//     <Link href="/src/demo">
//       here
//     </Link>{' '}
//     to read more
//   </div>


// export default () =>
//   <div>
//     Click{' '}
//     <Link href={{ pathname: '/about', query: { name: 'Zeit' }}}>
//       <a>here</a>
//     </Link>{' '}
//     to read more
//   </div>


{/* <Link>组件默认将新 url 推入路由栈中。你可以使用replace属性来防止添加新输入。 */}

export default () =>
  <div>
    Click{' '}
    <Link href="/about" replace>
    <a>here</a>
    </Link>{' '}

    <Link scroll={false} href="/?counter=10"><a>Disables scrolling</a></Link>
    to read more
  </div>


// export default () =>
//   <div>
//     Click{' '}
//     <Link href="/about">
//       <img src="https://img1.baidu.com/it/u=3084848274,1530529668&fm=26&fmt=auto" alt="image" />
//     </Link>
//   </div>