import Head from 'next/head'
import Link from 'next/link';

export default ({children})=>(
    <div>
        <Head>
            <title>通用头部测试</title>
        </Head>
        
        <div>
            <Link href='/'>主页</Link>
            <Link as='1' href='/list'>列表</Link>
            <Link  as='n' href='/nestStyle'>内联样式</Link>
        </div>

        <footer>
            版权测试
        </footer>
    </div>
)