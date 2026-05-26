import { dummyPostsData } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'

const feed = () => {

  const [feeds, setfeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async () => {
    setfeeds(dummyPostsData)
    setLoading(false);
  }

  useEffect(() => {
    fetchFeeds()
  }, [])
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-center justify-center xl:gap-8'>
      <div>
        <h1>Stories here</h1>
        <div className="p-4 grid"></div>
      </div>

      <div>
        <div>
          <h1>Sponsored posts</h1>
        </div>
          <h1>Recent messages</h1>
      </div>
    </div>
  ) : <loading />
}

export default feed;
