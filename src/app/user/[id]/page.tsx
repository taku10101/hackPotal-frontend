'use client'
import { Header } from '@/components/layouts/Header'
import { Paper } from '@/lib/mui/muiRendering'
import React, { Suspense, useEffect, useState } from 'react'
import { Left } from './_components/Left'
import { Center } from './_components/Center'
import { Reight } from './_components/Reight'
import { FetchProfile } from './_services/fetchProfile'
import { FollowService } from './_services/fechFollow'
import { Domain_AccountResponses } from '@/api/@types'

const profile = async (props: {
  params: {
    id: string
  }
}) => {
  const { id } = props.params

  const fetchProfile = new FetchProfile()
  const fetchFollow = new FollowService()

  // const user = await fetchProfile.UserInfo(id)
  // const follow = await fetchFollow.followCount(id)
  // const follower = await fetchFollow.followerCount(id)

  const [user, setUser] = useState<Domain_AccountResponses>()
  const [follow, followCount] = useState<number>()
  const [follower, setFollower] = useState<number>()

  useEffect(() => {
    ;(async () => {
      const user = await fetchProfile.UserInfo(id)
      const follow = await fetchFollow.followCount(id)
      const follower = await fetchFollow.followerCount(id)
    })()
  }, [])

  if (!user || !follow || !follower) {
    return <div>loading...</div>
  }

  return (
    <>
      <Header />

      <Paper
        elevation={5}
        sx={{
          margin: 'auto',
          width: '1600px',
          height: '1000px',
          display: 'flex',
          mb: 10,
        }}
      >
        <Left
          user={user}
          techs={user.tech_tags}
          frameworks={user.frameworks}
          follow={follow}
          follower={follower}
        />
        {/* <Center /> */}
        <Reight data={user} />
      </Paper>
    </>
  )
}
export default profile
