/*
import React, { useState, useEffect } from 'react';

const SocialMediaFeed = () => {
    const [feedData, setFeedData] = useState([]);



// NEED LOG IN DETAILS FROM CFC OR STARICK TO FURTHER THE FUNCTIONALITY OF THIS FACEBOOK ONE


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://graph.facebook.com/v12.0/StarickServices/posts?access_token=THEFB_ACCESS_TOKEN');
        const data = await response.json();
        setFeedData(data.data);
      } catch (error) {
        console.error('Error fetching Facebook feed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Facebook Feed</h2>
      <ul>
        {feedData.map((post) => (
          <li key={post.id}>{post.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaFeed;


:root {
  --background-white: rgba(243, 244, 246, 1);
  --brown: rgba(114, 102, 88, 1);
  --dark-green: rgba(115, 140, 75, 1);
  --grey-colour: rgba(172, 165, 157, 1);
  --light-green: rgba(195, 201, 160, 1);
  --off-black: rgba(3, 7, 18, 1);
  --orange: rgba(232, 110, 52, 1);
}
*/