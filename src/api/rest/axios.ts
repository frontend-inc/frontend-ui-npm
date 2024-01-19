import axios from 'axios'

axios.interceptors.response.use(
	(resp) => Promise.resolve(resp),
	(error) => Promise.reject(error?.response)
)

export default axios
