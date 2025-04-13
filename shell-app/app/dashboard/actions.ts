import {fetcher} from '@/api/fetcher'

export const getConfig = async () => {
  const resp = await fetcher(`${process.env.NEXT_PUBLIC_MOCK_API_URL}`)
  console.log('resp', resp)
  return resp
}
