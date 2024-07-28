import React, { useEffect, useState, useRef } from 'react';
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
  const videoRefs = useRef([]);

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
  }, [accessToken]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)'); // Mobile view

    if (mediaQuery.matches) {
      const handleScrollEffect = (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      };

      const observer = new IntersectionObserver(handleScrollEffect, {
        threshold: 0.5, // Trigger when 50% of the element is visible
      });

      videoRefs.current.forEach((video) => {
        if (video) {
          observer.observe(video);
        }
      });

      return () => {
        videoRefs.current.forEach((video) => {
          if (video) {
            observer.unobserve(video);
          }
        });
      };
    }
  }, [posts]);

  const handleMouseEnter = (event) => {
    if (!window.matchMedia('(max-width: 767px)').matches) {
      event.target.play();
    }
  };

  const handleMouseLeave = (event) => {
    if (!window.matchMedia('(max-width: 767px)').matches) {
      event.target.pause();
      event.target.currentTime = 0;
    }
  };

  return (
    <div className="instagram-posts">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={post.id} className="instagram-post">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              {post.media_type === 'IMAGE' && <img src={post.media_url} alt={post.caption} />}
              {post.media_type === 'VIDEO' && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  muted
                  loop
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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