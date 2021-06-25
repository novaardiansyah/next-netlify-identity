                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
import Head from 'next/head'
import { useEffect, useContext, useState } from 'react'
import AuthContext from '../stores/AuthContext'

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext)
  const [ error, setError ] = useState(null)
  const [ guides, setGuides ] = useState(null)
  
  useEffect(() => {
    if(authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => {
          if (!res.ok) {
            login()
            throw Error('you must first login to be able to see the premium guide')
          }
          
          return res.json()
        })
        .then(data => {
          setGuides(data)
          setError(null)
        })
        .catch(error => {
          setError(error.message)
          setGuides(null)
        })
    }
  }, [user, authReady])
  
  return (
    <>
      <Head>
        <title>Gaming Vibes | Premium Guides</title>
      </Head>
      
      <div className="container">
        <div className="row">
          <div className="col text-cl-dark">
            {
              error && (
                <div className="alert alert-danger" role="alert">
                  { error }
                </div>
              )
            }
          </div>
        </div>
        
        <div className="row justify-content-center">
          {
            guides &&
            guides.map(guide => (
              <div className="col-md-4 mb-3 text-cl-dark" key={guide.id}>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title fw-bold mb-0 pb-0 text-center">
                      { guide.title }
                    </h3>
                    <p className="card-subtitle text-center mb-3">
                      written by { guide.author }
                    </p>
                    <p className="card-subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque unde, et, maiores ullam, obcaecati aliquam quis impedit ratione ipsam corporis, dolores! Quo asperiores porro consectetur.
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}