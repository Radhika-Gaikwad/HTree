import React from 'react';
import HierarchyTree from './HierarchyTree';

const ProfilePicture = () => (
  <div style={styles.profilePictureWithEmoji}>
    <img
      src="profile-picture-url" // Add your profile picture URL here
      alt="Profile"
      style={styles.profilePicture}
    />
    <span style={styles.emojiOverlay}>😊</span>
  </div>
);

const Home = () => (


  
  <div style={styles.homeContainer}>
    <h1 style={styles.heading}>Organizational Hierarchy</h1>
    <div style={styles.treeContainer}>
      <HierarchyTree />
      <div style={styles.messageBox}>
        <div style={styles.messageContainer}>
          {/* Profile Section */}
          <div style={styles.profileSection}>
            <div style={styles.profileInfo}>
              <div style={styles.profilePic}> </div>
              <div style={styles.userInfo}>
                <div style={styles.username}>Username</div>
                <div style={styles.date}>2024/11/13</div>
              </div>
            </div>
            <div style={styles.moreOptions}>⋮</div>
          </div>

          {/* Message Section */}
          <div style={styles.messageContent}>
            Did you complete the first project? Please send me <br/>the completed PDFs.
            
          </div>

          {/* Typing Box */}
          <div style={styles.typingBox}>
            <div style={styles.typingPlaceholder}>@ John, write your comment</div>
          </div>

          {/* SVG Icons */}
          <div style={styles.svgIcons}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 18 19" fill="none">
  <path d="M7.59727 7.43429V12.4915C7.60311 12.8613 7.75411 13.214 8.01769 13.4735C8.28128 13.7329 8.6363 13.8783 9.00615 13.8783C9.376 13.8783 9.73103 13.7329 9.99461 13.4735C10.2582 13.214 10.4092 12.8613 10.415 12.4915L10.4196 5.86281C10.4234 5.54673 10.3645 5.23303 10.2462 4.9399C10.1279 4.64677 9.95258 4.38004 9.73042 4.15517C9.50826 3.9303 9.24368 3.75176 8.952 3.62991C8.66033 3.50806 8.34737 3.44531 8.03127 3.44531C7.71517 3.44531 7.40221 3.50806 7.11054 3.62991C6.81886 3.75176 6.55428 3.9303 6.33212 4.15517C6.10996 4.38004 5.93465 4.64677 5.81634 4.9399C5.69804 5.23303 5.63909 5.54673 5.64293 5.86281V12.5362C5.63649 12.9812 5.71857 13.423 5.88441 13.836C6.05025 14.249 6.29653 14.6249 6.60893 14.9418C6.92133 15.2588 7.29363 15.5105 7.70417 15.6823C8.11472 15.8541 8.55531 15.9425 9.00035 15.9425C9.44539 15.9425 9.88599 15.8541 10.2965 15.6823C10.7071 15.5105 11.0794 15.2588 11.3918 14.9418C11.7042 14.6249 11.9505 14.249 12.1163 13.836C12.2821 13.423 12.3642 12.9812 12.3578 12.5362V6.30015" stroke="#5D5B6C" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 18 19" fill="none">
  <path d="M9 16.6221C12.8315 16.6221 15.9375 13.516 15.9375 9.68457C15.9375 5.85309 12.8315 2.74707 9 2.74707C5.16852 2.74707 2.0625 5.85309 2.0625 9.68457C2.0625 13.516 5.16852 16.6221 9 16.6221Z" stroke="#5D5B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.75 8.74707C7.26777 8.74707 7.6875 8.32734 7.6875 7.80957C7.6875 7.2918 7.26777 6.87207 6.75 6.87207C6.23223 6.87207 5.8125 7.2918 5.8125 7.80957C5.8125 8.32734 6.23223 8.74707 6.75 8.74707Z" fill="#5D5B6C"/>
  <path d="M11.25 8.74707C11.7678 8.74707 12.1875 8.32734 12.1875 7.80957C12.1875 7.2918 11.7678 6.87207 11.25 6.87207C10.7322 6.87207 10.3125 7.2918 10.3125 7.80957C10.3125 8.32734 10.7322 8.74707 11.25 8.74707Z" fill="#5D5B6C"/>
  <path d="M11.5983 11.3721C11.335 11.8281 10.9563 12.2068 10.5003 12.4701C10.0442 12.7333 9.52693 12.8719 9.00034 12.8719C8.47376 12.8719 7.95645 12.7333 7.50041 12.4701C7.04437 12.2068 6.66566 11.8281 6.40234 11.3721" stroke="#5D5B6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>

          {/* Action Buttons */}
          <div style={styles.actionButtons}>
            <button style={styles.closeButton}>Close</button>
            <button style={styles.sendButton}>Send</button>
          </div>

          {/* Go to Chat Button */}
          <button style={styles.goToChatButton}>Go to Chat</button>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  homeContainer: {
    marginTop: '10px',
    marginLeft: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '80vh',
  },
  heading: {
    marginTop: '100px',
    color: '#000',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '25px',
    fontWeight: 700,
    textAlign: 'center',
  },
  treeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  messageBox: {
    position: 'absolute',
    right: '-550px',
    top:'40px',
    width: '300px',
    height:'440px',
    backgroundColor: '#FFFFFF',
    padding: '12px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  profileSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '5px',
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePic: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#CCC',
    marginRight: '8px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  username: {
    color: '#000',
    fontWeight: 'bold',
  },
  date: {
    color: '#777',
    fontSize: '12px',
  },
  moreOptions: {
    color: '#828282',
    fontSize: '22px',
    fontWeight: 'bold',

  },
  messageContent: {
    backgroundColor: 'fffff',
    padding: '10px',
    borderRadius: '5px',
    color: '#333',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.054px',
    fontFamily: 'Calibre, sans-serif'

  },
  typingBox: {
    display: 'flex',
    height: '111.255px',
    padding: '11px',
    alignItems: 'flex-start',
    backgroundColor: '#F2F2F7',
    borderRadius: '5.934px',
    color: '#333',
    fontSize: '13px',
    fontFamily: 'Calibre, sans-serif'
  },
  typingPlaceholder: {
    color: '#AAA',
  },
  svgIcons: {
    display: 'flex',
    gap: '5px',
   
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '5px',
  },
  closeButton: {
    width: '70px',
    height: '30px',
    backgroundColor: '#F2F2F7',
    border:'none',
    borderRadius: '8.9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
  },
  sendButton: {
    width: '70px',
    height: '30px',
    backgroundColor: '#02948B',
    border:'none',
    borderRadius: '8.9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    color: '#FFFFFF',
  },
  goToChatButton: {
    marginTop: '10px',
    width: '150px',
    height: '32px',
    backgroundColor: '#02948B',
    borderRadius: '8.9px',
    color: '#FFFFFF',
    display: 'flex',
    border: 'none',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
  },
};

export default Home;
