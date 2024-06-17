const Profile = ({userProfileDetail}) => {
  return (
    <>
      <h2>Profile</h2>
      <p>Username: {userProfileDetail.username}</p>
      <p>address: {userProfileDetail.address}</p>
      <img src={userProfileDetail.profilePicture} alt="alt pic" />
    </>
  );
};

export default Profile;
