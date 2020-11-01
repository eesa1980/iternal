import React from 'react';
import { FaRegEdit } from "react-icons/fa";


const Home = () => {
  return ( 
    <div className="home-container">
      <div className="columns">
        <div className="column is-4 flex-helper">
          <div className=" has-text-centered avatar-header mt-6">
            <figure className="image is-96x96">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            <h2 className="is-size-4">Persons name</h2>
            <button className="button is-text"><FaRegEdit /> Edit Profile</button>
            <div className="upgrade-account">
              <button className="button is-primary is-outlined is-normal">Upgrade Account</button> 
            </div>
          </div>



          <div className="recent-activity-section">
            <h2 className="is-size-5">Recent Activity</h2>
            <ul>
              <li>
              <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong>
                        <br />
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>

                  </div>

                  <div className="media-right">
                    <p>1W</p>
                    <a className="has-text-success">View</a>
                  </div>
                </article>
              </li>

              <li>
              <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong>
                        <br />
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>

                  </div>

                  <div className="media-right">
                    <p>1W</p>
                    <a className="has-text-success">View</a>
                  </div>
                </article>
              </li>

              <li>
              <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong>
                        <br />
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>

                  </div>

                  <div className="media-right">
                    <p>1W</p>
                    <a className="has-text-success">View</a>
                  </div>
                </article>
              </li>
             
            </ul>
          </div>

        </div>
        <div className="column bg-grey">
          <h1>chat bot column</h1>
        </div>
      </div>
    </div>

  );
}
 
export default Home;