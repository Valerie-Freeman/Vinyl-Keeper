import { useEffect, useState } from 'react'
import { searchAlbums } from '../models/discogs.server'
import { Toaster } from 'react-hot-toast'
import { AlbumCard } from './AlbumCard'
import { AddToLibraryButton } from './buttons/AddToLibraryButton'
import { AddToWishListButton } from './buttons/AddToWishListButton'
import { useLocation } from 'react-router-dom'

export const AlbumSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [albumResults, setAlbumResults] = useState([])
  const { pathname } = useLocation()

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
      fetchAlbums(searchQuery).then((albums) => {
        setAlbumResults(albums.slice(0, 15))
      })
    }
  }

  useEffect(() => {
    if (!searchQuery) {
      setAlbumResults([])
    }
  }, [searchQuery])

  return (
    <div id="page">
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
      <div id="results-container">
        {albumResults.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            albumResults={albumResults}
            setAlbumResults={setAlbumResults}
            button={
              pathname === '/albumSearch/library'
                ? AddToLibraryButton
                : AddToWishListButton
            }
          />
        ))}
      </div>
    </div>
  )
}
