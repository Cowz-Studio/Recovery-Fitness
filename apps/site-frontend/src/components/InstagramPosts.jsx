import React, { useEffect, useState } from 'react';
import '../styles/index/InstagramPost.css';

/**
 * InstagramPosts Component
 * 
 * This component fetches and displays the latest six Instagram posts
 * from a user's Instagram feed. The posts can include images and videos,
 * which are displayed as clickable squares that link to the original Instagram post.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.accessToken - The Instagram Graph API access token.
 * 
 * @returns {JSX.Element} The InstagramPosts component.
 */

const InstagramPosts = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,thumbnail_url,permalink&access_token=${accessToken}`);
        const data = await response.json();

        if (data.data) {
          const sortedPosts = data.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setPosts(sortedPosts.slice(0, 6));
        } else {
          console.error('Error fetching Instagram posts:', data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();

    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [accessToken]);

  return (
    <div className="instagram-posts">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="instagram-post">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              {post.media_type === 'IMAGE' && <img src={post.media_url} alt={post.caption} />}
              {post.media_type === 'VIDEO' && (
                <video
                  autoPlay={!isMobile}
                  muted
                  loop
                  playsInline
                >
                  <source src={post.media_url} type="video/mp4" />
                  <track kind="captions" srcLang="en" label="English captions" />
                  Your browser does not support the video tag.
                </video>
              )}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <img src={post.thumbnail_url || post.media_url} alt={post.caption} />
              )}
            </a>
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InstagramPosts;