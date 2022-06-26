import { useEffect, useState } from 'react'
import { searchAlbums } from '../models/discogs.server'
import { Toaster } from 'react-hot-toast'
import Spinner from 'react-spinkit'
import { AlbumCard } from './cards/AlbumCard'
import { AddToLibraryButton } from './buttons/AddToLibraryButton'
import { AddToWishListButton } from './buttons/AddToWishListButton'

export const AlbumSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [albumResults, setAlbumResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleAlbumSearchChange = (input) => {
    setSearchQuery(input)
  }

  const fetchAlbums = (q) => {
    return searchAlbums(q).then((res) => {
      return res.data.results
    })
  }

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      setLoading(true)
      fetchAlbums(searchQuery).then((albums) => {
        setAlbumResults(albums.slice(0, 24))
        setLoading(false)
      })
    }
  }

  useEffect(() => {
    if (!searchQuery) {
      setAlbumResults([])
    }
  }, [searchQuery])

  return (
    <div className="grid justify-items-center justify-items-stretch">
      <Toaster />
      <div id="form-container">
        <div id="album-input">
          <input
            type="text"
            placeholder="Search by artist or album..."
            value={searchQuery}
            onChange={(e) => handleAlbumSearchChange(e.target.value)}
            className="input input-bordered input-info w-full max-w-xs"
            onKeyDown={handleOnEnter}
          />
        </div>
      </div>
      {loading ? (
        <div className="w-full">
          <progress className="progress"></progress>
        </div>
      ) : (
        <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-2 gap-8">
          {albumResults.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              albumResults={albumResults}
              setAlbumResults={setAlbumResults}
              buttons={[AddToLibraryButton, AddToWishListButton]}
            />
          ))}
        </div>
      )}
    </div>
  )
}
