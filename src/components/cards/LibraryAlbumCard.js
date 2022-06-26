import { Link } from 'react-router-dom'

export const LibraryAlbumCard = ({ album }) => {
  return (
    <Link
      to={`/album/${album.master_id}`}
      className="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
    >
      <figure>
        <img src={album.cover_image} alt={album.title} className="rounded-sm" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{album.title}</h2>
        <h3 className="font-semibold">{album.artist}</h3>
        <p>{album.year}</p>
      </div>
    </Link>
  )
}
