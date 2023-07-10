'use client'
import { Header } from '@/components/layouts/Header'
import { Hackathon } from './types/hackathon'
import { HackathonList } from './_components/HackathonList'

const Home = () => {
  const hackathons: Hackathon[] = [
    {
      id: 1,
      name: 'ハッカソン1',
      icon: 'https://source.unsplash.com/random',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 2,
      name: 'ハッカソン1',
      icon: 'https://source.unsplash.com/random',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 3,
      name: 'ハッカソン1',
      icon: 'https://source.unsplash.com/random',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
    {
      id: 4,
      name: 'ハッカソン1',
      icon: 'https://source.unsplash.com/random',
      expired: '2021-10-10',
      start_date: '2021-10-10',
      term: 3,
      hackthon_tag: ['タグ1', 'タグ2', 'タグ3'],
    },
  ]
  return (
    <>
      <Header />
      <HackathonList hackathons={hackathons} />
    </>
  )
}
export default Home
