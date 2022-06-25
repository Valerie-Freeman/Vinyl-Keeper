import axios from 'axios'

export const searchAlbums = (q) => {
  return axios.get(
    `${process.env.REACT_APP_DISCOGS_API}/database/search?q=${q}&type=master&key=${process.env.REACT_APP_CONSUMER_KEY}&secret=${process.env.REACT_APP_CONSUMER_SECRET}`
  )
}
