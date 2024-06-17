import { useState } from "react"

const ClassActivity = () => {

    const [userInfo, setUserInfo] = useState(
        {
            firstName: "Daniel",
            lastName: "Moreno",
            hasPets: false,
            age: 32,
            hobbies: ["tennis", "movies", "video games"]
        }
    )
    console.log(userInfo)
    
    return (
        <>
        <p>Hello, my name is {userInfo.firstName} {userInfo.lastName}</p>
        <p>I am {userInfo.age} years old.</p>
        <p>{userInfo.hasPets ? "I have pets" : "I have no pets"}</p>
        <p>Hobbies:</p>
        <ul>
            {
                userInfo.hobbies.map((hobby, index) => {
                    return <li key={index}>{hobby}</li>
                })
            }
        </ul>
        </>
    )
}

export default ClassActivity