import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import UsernameForm from "../components/Usernameform"

export default function Home() {
  const {data: session, status} = useSession()
  const [ userInfo, setUserInfo ] = useState()
  const [ userInfoStatus, setUserInfoStatus ] = useState('loading')

  function getUserInfo(){
    if(status === 'loading'){
      return
    }
      fetch(`/api/users?id=${session.user.id}`)
      .then((res) => {
          res.json().then(res => {
            setUserInfo(res.user)
            setUserInfoStatus('done')
          })
        })
      }
    useEffect(() => {
      getUserInfo()
    },[status])
    /** */
    if(userInfoStatus === 'loading'){
      return 'loading user info'
    }

    if(!userInfo?.username){
      return <UsernameForm />
    }

    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }