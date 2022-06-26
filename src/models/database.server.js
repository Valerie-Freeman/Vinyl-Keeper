import axios from 'axios'

export const postLibraryAlbum = (album) => {
  return axios
    .get(
      `http://localhost:8088/libraries?userId=${album.userId}&master_id=${album.master_id}`
    )
    .then((res) => {
      if (res.data.length) {
        throw new Error('Album already in library')
      } else {
        return axios.post('http://localhost:8088/libraries', album)
      }
    })
}

export const postWishlistAlbum = (album) => {
  return axios
    .get(
      `http://localhost:8088/wishlists?userId=${album.userId}&master_id=${album.master_id}`
    )
    .then((res) => {
      if (res.data.length) {
        throw new Error('Album already in wishlist')
      } else {
        return axios.post('http://localhost:8088/wishlists', album)
      }
    })
}

export const getUserLibrary = (userId) => {
  return axios.get(`http://localhost:8088/libraries?userId=${userId}`)
}

export const getUserWishlist = (userId) => {
  return axios.get(`http://localhost:8088/wishlists?userId=${userId}`)
}

export const deleteWishlistItem = (albumId) => {
  return axios.delete(`http://localhost:8088/wishlists/${albumId}`)
}
