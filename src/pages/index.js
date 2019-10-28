import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
   <Layout>
     <h1>Hello world!</h1>
     <p>Read About: <Link to={"/about"}>Here</Link></p>
   </Layout>
)
