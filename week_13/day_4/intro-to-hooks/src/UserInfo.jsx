import { useState } from "react";

const UserInfo = () => {
  const userInfoObject = {
    firstName: "Joe",
    lastName: "Jack",
    hasPets: true,
    age: 30,
    hobbies: ["reading", "gaming", "hiking", "sleeping"],
  };

  const [userInfo, setUserInfo] = useState(userInfoObject);

  return (
    <>
      <h2>User info</h2>
      <strong>
        Hello, my name is {userInfo.firstName} {userInfo.lastName}, I am
        {userInfo.age} years old,
        <br /> 
         {userInfo.hasPets ? <em> I have pets</em> : <em>I have no pets</em>}
      </strong>
      <h4>Hobbies</h4>
      <ul>
        {
          userInfo.hobbies.map((hobby, i) => {
            return <li key={i}> {hobby} </li>
          })
        }
      </ul>
    </>
  );
};

export default UserInfo;
