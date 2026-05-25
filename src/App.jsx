import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Feed from './pages/feed'
import Message from './pages/message'
import Connection from './pages/connection'
import Discover from './pages/dicover'
import Chatbox from './pages/chatbox'
import CreatePost from './pages/createpost'
import Layout from './pages/layout'
import Profile from './pages/profile'
import { useUser } from '@clerk/react'

const App = () => {
  const { user } = useUser()

  return (
    <>
    <Routes>
      <Route path="/" element={ !user ? <Login /> : <Layout /> }>
      <Route index   element={<Feed />} />
      <Route path="/message" element={<Message />} />
      <Route path="/message/:userId" element={<Chatbox />} />
      <Route path="/connection" element={<Connection />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/profile/:profileId" element={<Profile />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
