import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (

   <Layout>
     <h1>About Me!</h1>
     <p>Read more about me.</p>
     <p>Go back <Link to={"/"}>Home</Link></p>
   </Layout>
)