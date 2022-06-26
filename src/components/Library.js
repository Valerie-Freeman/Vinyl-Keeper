import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getUserLibrary } from '../models/database.server'
import { LibraryAlbumCard } from './cards/LibraryAlbumCard'

export const Library = () => {
  const [userAlbums, setUserAlbums] = useState([])

  const user = JSON.parse(localStorage.getItem('vinyl_user'))
  const navigate = useNavigate()

  const handleNewAlbumClick = () => {
    navigate('/albumSearch')
  }

  useEffect(() => {
    getUserLibrary(user.id).then((res) => setUserAlbums(res.data))
  }, [])
  //ml-5 mt-4 mr-2
  // card w-96 bg-base-100 shadow-xl shadow-gray-700 image-full
  // 'card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1'
  return (
    <>
      <div className="grid not-prose justify-items-center lg:grid-cols-4 md:grid-cols-2 gap-8 m-4">
        <Link
          to={`/albumSearch`}
          className="image-full card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1"
        >
          <figure>
            <img
              src="https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png?ssl=1"
              alt="album cover"
            />
          </figure>
          <div className="card-body items-center flex-col justify-center">
            <h2 className="card-title font-bold">Add Album</h2>
          </div>
        </Link>
        {userAlbums.map((album) => (
          <LibraryAlbumCard key={album.id} album={album} />
        ))}
      </div>
    </>
  )
}
