import React from 'react';

function PostCard({ post }) {
  const {
    author,
    text,
    reposted,
    socialActivityCountsInsight,
    postedAt,
    url,
    video,
  } = post;

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white">
 
      <div className="flex items-center gap-4 mb-4">
        <img
          src={author.profilePictures?.[0]?.url || `https://ui-avatars.com/api/?name=${author.fullName}`}
          alt={author.fullName}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            {author.fullName}
          </a>
          <p className="text-sm text-gray-500">{author.headline}</p>
        </div>
      </div>

      {/* Post Text */}
      <p className="text-gray-800 mb-4">{text}</p>

      {/* Reshared Post */}
      {reposted && post.object && (
        <div className="border border-gray-200 rounded-md p-3 bg-gray-50">
          <p className="text-sm text-gray-500 mb-2">Reshared Post:</p>
          <p className="text-gray-800 mb-2">{post.object.text}</p>
          {post.object.video?.thumbnails && (
            <img
              src={post.object.video.thumbnails[0]}
              alt="Reshared Media"
              className="w-full rounded-md mb-2"
            />
          )}
          <a
            href={post.object.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            View Original Post
          </a>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <p>Total Reactions: {socialActivityCountsInsight.totalReactionCount}</p>
        <p>{postedAt}</p>
      </div>

   
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 text-sm hover:underline"
      >
        View on LinkedIn
      </a>
    </div>
  );
}



export default PostCard;
