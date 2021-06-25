import Head from 'next/head'
import dynamic from 'next/dynamic'

// components
const AuthContextProvider = dynamic(() => import('../stores/AuthContext').then(res => res.AuthContextProvider))
const Layout = dynamic(() => import('../components/Layout'))

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        { /* Bootstrap CSS */ }
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous" />
        { /* Colors CSS */ }
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/novaardiansyah1/snippets-and-cdn@1.0.0/css/colors.css" />
        { /* App CSS */ }
        <link rel="stylesheet" href="/assets/css/app.css" />
        
        { /* Bootstrap Bundle */ }
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossOrigin="anonymous"></script>
        { /* Eruda Console */ }
        <script src="https://cdn.jsdelivr.net/npm/eruda@2.4.1/eruda.js" crossOrigin="anonymous"></script>
        <script>eruda.init()</script>
        { /* Box Icons */ }
        <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default MyApp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
