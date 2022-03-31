import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Landing from '../layouts/Landing'
import MainContentProfile from '../components/Profile Page/Profile Page Main Content/MainContentProfile'
import TopbarProfile from '../components/Profile Page/Profile Page Top Bar/TopbarProfile'
import ContainerProfile from '../components/Profile Page/Profile Page Container/ContainerProfile'

const Profile: NextPage = () => {
  const router = useRouter()
  return (
    <Landing>
      <ContainerProfile>
        <TopbarProfile />
        <MainContentProfile />
      </ContainerProfile>
    </Landing>
  )
}

export default Profile
