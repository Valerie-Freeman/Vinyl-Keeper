import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserLibrary } from '../models/database.server'
import { AlbumCard } from './AlbumCard'

export const Library = () => {
  const [userAlbums, setUserAlbums] = useState([])

  const user = JSON.parse(localStorage.getItem('vinyl_user'))
  const navigate = useNavigate()

  const handleNewAlbumClick = () => {
    navigate('/albumSearch/library')
  }

  useEffect(() => {
    getUserLibrary(user.id).then((res) => setUserAlbums(res.data))
  }, [])

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl shadow-black image-full">
        <figure>
          <img
            src="https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png?ssl=1"
            alt="album cover"
          />
        </figure>
        <div className="card-body items-center flex-col justify-center">
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleNewAlbumClick}>
              Add Album
            </button>
          </div>
        </div>
      </div>
      {userAlbums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </>
  )
}
