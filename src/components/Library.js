import { useContext, useEffect, useState } from 'react'
import { getUserLibrary } from '../models/database.server'
import { UserContex } from '../userContext'
import { AddAlbumCard } from './cards/AddAlbumCard'
import { LibraryAlbumCard } from './cards/LibraryAlbumCard'

export const Library = () => {
  const [userAlbums, setUserAlbums] = useState([])
  const user = useContext(UserContex)

  useEffect(() => {
    if (user.id) {
      getUserLibrary(user.id).then((res) => setUserAlbums(res.data))
    }
  }, [user])

  return (
    <>
      <div className="grid not-prose justify-items-center lg:grid-cols-4 md:grid-cols-2 gap-8 m-4">
        <AddAlbumCard />
        {userAlbums.map((album) => (
          <LibraryAlbumCard key={album.id} album={album} />
        ))}
      </div>
    </>
  )
}
