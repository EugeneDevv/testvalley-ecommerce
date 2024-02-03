import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = filterConditions => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const url = 'https://api.testvalley.kr/main-banner/all'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        let filteredData = response.data
        console.log(filteredData)
        if (filterConditions) {
          filteredData = filteredData.filter(item =>
            Object.entries(filterConditions).every(
              ([key, value]) => item[key] === value
            )
          )
        }
        setData(filteredData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url, filterConditions])

  return { data, error, loading }
}

export default useFetchData
