import Link from 'next/link';
import Head from 'next/head';
function NavBar() {

    return(
        <div >
            <Head>
                 <link rel="stylesheets" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
                </Head>
                <Link href="/"> <a>home</a></Link>
                <Link href="/todo"> <a>todo</a></Link>

                </div>
    )
}
export default NavBar