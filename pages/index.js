import UsernameForm from "../components/UsernameForm"
import useUserInfo from "../hooks/useUserInfo"

export default function Home() {

  const {userInfo, status: userInfoStatus} = useUserInfo()
  console.log("Console log", userInfoStatus)
    /** */
    if(userInfoStatus === 'loading'){
      return 'loading user info'
    }
    console.log(userInfo)
    if(!userInfo?.username){
      return <UsernameForm />
    }

    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }