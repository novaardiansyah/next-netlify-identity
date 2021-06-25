import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useContext } from 'react'

// components
import AuthContext from '../stores/AuthContext'

export default function Layout({ children }) {
  const {user, login, logout, authReady} = useContext(AuthContext)
  
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center">
              <Image src="/assets/image/rupee.png" width={50} height={48} />
              Gaming Vibes
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-md-flex justify-content-end align-items-center" id="myNavbar">
            {authReady && (
              <div className="navbar-nav">
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/guides"><a className="nav-link">Guides</a></Link>
                {!user && <Link href="#"><a onClick={login} className="nav-link">Login / SignUp</a></Link>}
                {user && (
                  <>
                    <Link href="#"><a className="nav-link d-none d-md-inline">{user.email}</a></Link>
                    <Link href="#"><a onClick={logout} className="nav-link">Log Out</a></Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col">
            <div className="banner">
              <Image src="/assets/image/banner.png" width={966} height={276} />
            </div>
          </div>
        </div>
      </div>
      
      <section id="content" className="pb-2 mt-3">
        <div className="container">{ children }</div>
      </section>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white d-flex justify-content-center align-items-center">
            <footer className="py-4">
              <p className="py-0 my-0">copyright © 2021 by <Link href="/"><a>Nova Ardiansyah</a></Link>.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
