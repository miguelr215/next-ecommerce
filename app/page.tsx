import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import React from 'react'

const Home = () => {
  return (
    <Container className='py-4 md:py-8'>
      <HomeBanner />
    </Container>
  )
}

export default Home