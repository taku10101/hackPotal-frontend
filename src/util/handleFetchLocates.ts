import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { Db_Locates } from '@/api/@types'

export const handleFetchLocates = async () => {
  try {
    const client = api(
      aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }),
    )

    const response = await client.locates.get()
    const data = await response.body
    return data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
  
}
