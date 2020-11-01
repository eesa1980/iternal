import React from 'react';  

const Profile = () => {
  return ( 
    <div className="container mt-6">
      <div className="columns ">
        <div className="column is-8">
          <h2 className="is-size-3 has-text-weight-bold mb-4">My Profile</h2>
          <p className="mb-4">The details on this page probably won’t change all that often but if they do, simply click each entry to edit the info.
            Don’t forget to upload your finest photo for your profile</p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8">
          <div className="box">
          <div class="box-container">
          <div className="flex-container mb-6">
            <div className="flex-item">
              <figure className="image is-96x96 mr-5">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
              </figure>
              </div>
              <div className="flex-item">
              <p className="is-size-4 has-text-weight-bold">Persons Name</p>
              <div className="field is-grouped">
                <p className="control">
                  <a className="has-text-success">
                    Upload image
                  </a>
                </p>
                <p className="control">
                  <a className="has-text-danger">
                    Remove 
                  </a>
                </p>
              </div>
            </div>
          </div>


          <div className="field ">
            <div className="">
              <div className="columns">
                <div className="column">
                <label className="label">Enter your title</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>
                <div className="column">
                <label className="label">Date of birth</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                <label className="label">Hometown</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>
                <div className="column">
                <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field has-text-right">
            <div className="control ">
              <button className="button is-primary mt-5">Update changes</button>
            </div>
          </div>
          </div>


          </div>
          
        </div>
        <div className="column">
          <div className="box">
            <div class="box-container">
              <h2 className="has-text-centered is-size-5 has-text-weight-bold mb-5">Upgrade your account</h2>
              <p className="mb-5">It looks like your using our free package, learn more about premium by clicking the link below</p>
              <div className="upgrade-account has-text-centered">
                <button className="button is-primary is-outlined is-normal">Upgrade Account</button> 
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
   );
}
 
export default Profile;