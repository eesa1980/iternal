import React from 'react';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";





const Memories = () => {
  return (     
    <div className="container mt-6">
      <div className="columns">
        <div className="column is-8">
          <h2 className="is-size-3 has-text-weight-bold mb-4">My Memories</h2>
          <p>Here are all the special memories you’ve saved for the future. If you want to re-read them or even share them with someone else just give them a click. Have your added a memory from each decade of your life? Do you remember the 80’s? The 60’s (if so, were you really there?)? The 40’s (respect!)? A lot of users add at least one memory from each decade to get started, then they fill in the gaps. 
          Make sure you keep updating your memories because as Aerosmith once sang, “I don’t wanna miss a thing.</p>
          <div className="memory-section">
            <h2 className="is-size-4 has-text-weight-bold">Memory Timeline - 2/10 </h2>
            <div className="flex-container is-justify-content-space-between	mb-6">
              <p>You can save 8 more memories <a className="has-text-success has-text-weight-bold">Upgrade</a> now for unlimited memories</p>
              <a className=" has-text-success has-text-weight-bold">Add New Memory</a>
            </div>


            <div className="box">
            <article className="media is-align-items-center">
                <figure className="media-left">
                  <p className="is-size-4 has-text-weight-bold" >
                  Memory title 
                  </p>
                  <p>some test just describing the memory</p>
                </figure>
                <div className="media-content has-text-right is-size-5 has-text-weight-bold">
                  <div className="content">
                    <p>
                    27/10/95
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="column">
          <h2 className="is-size-4 has-text-weight-bold mb-4">Share Your Memories</h2>
          <div className="box">
            <h3 className="is-size-5 has-text-weight-bold mb-3">Add their email addresses</h3>
            <p className="mb-5">Add your friend’s email here to share your memories with them. Add up to 5 at a time</p>
            <div className="field is-grouped">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Add Email" />
            </p>
            <p className="control">
              <a className="button is-info">
                Add
              </a>
            </p>
          </div>
          </div>
          <div className="box">
            <h2 className="is-size-5 has-text-weight-bold mb-3">Send them your unique link</h2>
            <div className="mb-5 share-link has-text-success"><a className=" has-text-success mr-1">https://www.mylink.com <FontAwesomeIcon icon={faClone} /></a></div>
            <p className="mb-3 has-text-grey">Or share on</p>
            <div className="share-icons">
              <FaFacebook />
              <FaLinkedinIn />
              <FaWhatsapp />
              <FaFacebookMessenger />
            </div>
          </div>  
        </div>
      </div>
    </div> 
   );
}
 
export default Memories;