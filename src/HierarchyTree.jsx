//hierarchyTree.jsx



import React from 'react';

// Box component with customized style
const Box = ({ title, position, width }) => (
  <div style={{
    width,
    height: '48.526px',
    backgroundColor: '#038B82',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1.158px 2.316px 0px rgba(0, 0, 0, 0.17)',
    borderRadius: '5px',
    margin: '10px 0'
  }}>
    <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>User</div>
    <div>{position}</div>
  </div>
);


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80" viewBox="0 0 40 80" fill="none">
    {/* Vertical arrow line */}
    <path d="M20 0 L20 60" stroke="#038B82" strokeWidth="2" />
    {/* Left arrowhead */}
    <path d="M20 60 L10 80" stroke="#038B82" strokeWidth="2" />
    {/* Right arrowhead */}
    <path d="M20 60 L30 80" stroke="#038B82" strokeWidth="2" />
  </svg>
);

// Main hierarchy component
const HierarchyTree = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
    {/* Root Level: CEO */}
    <Box position="CEO" width="114.632px" />

    {/* SVG Connectors from CEO to Directors */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px', marginTop: '-10px' }}>
      {/* Left SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none">
        <path d="M78.1074 8.26367V19.8299C78.1074 26.2248 72.9233 31.4089 66.5285 31.4089H16.9495C10.5547 31.4089 5.37058 36.593 5.37058 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389"/>
      </svg>
      
      {/* Right SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none">
        <path d="M5.10547 8.26367V19.8299C5.10547 26.2248 10.2895 31.4089 16.6844 31.4089H69.2634C75.6582 31.4089 80.8423 36.593 80.8423 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M81.3031 61.8687C81.0802 62.2547 80.5232 62.2547 80.3003 61.8687L76.2893 54.9214C76.0664 54.5354 76.345 54.0529 76.7906 54.0529H84.8128C85.2584 54.0529 85.537 54.5354 85.3142 54.9214L81.3031 61.8687Z" fill="#029389"/>
      </svg>
    </div>

    {/* Second Level: Directors */}
    <div style={{ display: 'flex', gap: '20px', marginTop: '-10px' }}>
      <Box position="Director" width="125.632px" />
      <Box position="Director" width="125.632px" />
    </div>

    {/* SVG Connectors from First Director to Managers */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', marginTop: '-10px' , marginRight:'50px'}}>
      {/* Left SVG for Branch Manager */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none">
        <path d="M78.1074 8.26367V19.8299C78.1074 26.2248 72.9233 31.4089 66.5285 31.4089H16.9495C10.5547 31.4089 5.37058 36.593 5.37058 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389"/>
      </svg>

      {/* Middle SVG for Zone Manager */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none">
        <path d="M5.10547 8.26367V19.8299C5.10547 26.2248 10.2895 31.4089 16.6844 31.4089H69.2634C75.6582 31.4089 80.8423 36.593 80.8423 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M81.3031 61.8687C81.0802 62.2547 80.5232 62.2547 80.3003 61.8687L76.2893 54.9214C76.0664 54.5354 76.345 54.0529 76.7906 54.0529H84.8128C85.2584 54.0529 85.537 54.5354 85.3142 54.9214L81.3031 61.8687Z" fill="#029389"/>
      </svg>

      {/* Right SVG for Regional Manager */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none" transform="translate(50, 0)">
  <path d="M4.90981 8.26367V19.8299C4.90981 26.2248 10.0939 31.4089 16.4887 31.4089H66.0677C72.4625 31.4089 77.6466 36.593 77.6466 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M78.1074 61.8687C77.8845 62.2547 77.3275 62.2547 77.1046 61.8687L73.0935 54.9214C72.8706 54.5354 73.1491 54.0529 73.5947 54.0529H81.6169C82.0625 54.0529 82.341 54.5354 82.1182 54.9214L78.1074 61.8687Z" fill="#029389"/>
</svg>


    </div>

    {/* Third Level: Managers */}
    <div style={{ display: 'flex', gap: '20px' }}>
      <Box position="Branch Manager" width="150.316px" />
      <Box position="Zone Manager" width="150.316px" />
      <Box position="Regional Manager" width="150.316px" />
    </div>

        {/* SVG Connectors from First Director to Managers */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', marginTop: '-10px' , marginRight:'50px'}}>
      {/* Left SVG for Branch Manager */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-100, 0)">
        <path d="M78.1074 8.26367V19.8299C78.1074 26.2248 72.9233 31.4089 66.5285 31.4089H16.9495C10.5547 31.4089 5.37058 36.593 5.37058 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none">

  <path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
  
 
  <path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />
</svg>



      {/* Right SVG for Regional Manager */}
      <svg xmlns="http://www.w3.org/2000/svg" width="83" height="63" viewBox="0 0 83 63" fill="none" transform="translate(150, 0)">
  <path d="M4.90981 8.26367V19.8299C4.90981 26.2248 10.0939 31.4089 16.4887 31.4089H66.0677C72.4625 31.4089 77.6466 36.593 77.6466 42.9878V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M78.1074 61.8687C77.8845 62.2547 77.3275 62.2547 77.1046 61.8687L73.0935 54.9214C72.8706 54.5354 73.1491 54.0529 73.5947 54.0529H81.6169C82.0625 54.0529 82.341 54.5354 82.1182 54.9214L78.1074 61.8687Z" fill="#029389"/>
</svg>


    </div>

    <div style={{ display: 'flex', gap: '100px', marginTop: '0'}}>
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
    </div>

    <div style={{ display: 'flex', gap: '150px', marginTop: '0'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none"  transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round"  />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />



</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>
 </div>

 <div style={{ display: 'flex', gap: '100px', marginTop: '0'}}>
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
    </div>

    <div style={{ display: 'flex', gap: '150px', marginTop: '0'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none"  transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round"  />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />



</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>
 </div>

 <div style={{ display: 'flex', gap: '100px', marginTop: '0'}}>
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
    </div>

    <div style={{ display: 'flex', gap: '150px', marginTop: '0'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none"  transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round"  />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />



</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="90" height="63" viewBox="0 0 83 63" fill="none" transform="translate(-30, 0)">

<path d="M78.1074 8.26367V54.0531" stroke="#029389" strokeWidth="2.31579" strokeLinecap="round" strokeLinejoin="round" />

<path d="M4.90981 61.8687C5.13264 62.2547 5.68974 62.2547 5.91257 61.8687L9.92364 54.9214C10.1465 54.5354 9.86793 54.0529 9.42225 54.0529H1.40012C0.954449 54.0529 0.675904 54.5354 0.898741 54.9214L4.90981 61.8687Z" fill="#029389" transform="translate(73, 0)" />

</svg>
 </div>
 <div style={{ display: 'flex', gap: '100px', marginTop: '0'}}>
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
      <Box position="Designer" width="185.316px" />
    </div>


</div>
);



export default HierarchyTree;
