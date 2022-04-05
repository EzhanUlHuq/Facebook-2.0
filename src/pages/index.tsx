import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Landing from '../layouts/Landing'
import Container from '../components/Home Page/Container/Container'
import MainContent from '../components/Home Page/Main Content/MainContent'
import LeftSidebar from '../components/Home Page/Left Side Bar/LeftSidebar'
import RightSideBar from '../components/Home Page/Right Sidebar/RightSidebar'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Landing>
      <Container>
        <LeftSidebar />
        <MainContent />
        <RightSideBar />
      </Container>
    </Landing>
  )
}

export default Home
