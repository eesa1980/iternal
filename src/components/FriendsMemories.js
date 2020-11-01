import React from 'react'; 
import Avatar from 'react-avatar';

const FriendsMemories = () => {
  return ( 
    <div className="container mt-6">
      <div className="columns ">
        <div className="column is-8">
          <h2 className="is-size-3 has-text-weight-bold mb-4">Friends Memories</h2>
          <p className="mb-4">Here are the friends that have chosen to share their memories with you.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <div className="box">
            <div className=" has-text-centered	avatar-header">
              <figure className="mb-3">
                <Avatar githubHandle="sitebase" size={96} round="1000px" />
              </figure>
              <h2>Persons name</h2>
              <p className="">Amount of memories</p>
              <div className="upgrade-account">
                <button className="button is-primary is-outlined is-normal">View Profile</button> 
              </div>
            </div>
          </div>
        </div> 

        <div className="column is-3">
          <div className="box">
            <div className=" has-text-centered	avatar-header">
              <figure className="mb-3">
                <Avatar githubHandle="sitebase" size={96} round="1000px" />
              </figure>
              <h2>Persons name</h2>
              <p className="">Amount of memories</p>
              <div className="upgrade-account">
                <button className="button is-primary is-outlined is-normal">View Profile</button> 
              </div>
            </div>
          </div>
        </div> 

      </div>
    </div>
   );
}
 
export default FriendsMemories;