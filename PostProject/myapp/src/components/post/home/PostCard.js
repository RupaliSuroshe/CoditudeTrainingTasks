export const PostCard = ({
  postData,
  likedPosts,
  toggleLike,
  toggleComments,
  showComments,
  addComment,
  setAddComment,
  handleAddComment,
}) => {
  return (
    <>
      {postData.map((post) => (
        <div className="col-md-4 mt-2 mb-5 animate__animated animate__bounceInDown">
          <div
            key={post.id + likedPosts.length}
            className="max-w-sm rounded-xl overflow-hidden shadow-2xl mx-auto mt-10 bg-fuchsia-50 hover:bg-fuchsia-100"
          >
            <div className="font-bold  text-xl px-2 ps-2 flex items-center">
              <img
                src="./assets/user100.png"
                alt="profile"
                className="z-10 rounded-full"
                style={{ width: "40px", height: "40px" }}
              />
              <span className="ml-2">{post.username}</span>
            </div>

            <img
              src={`https://picsum.photos/300/300?random=${post.id}`}
              alt="Post"
              className="w-full h-64 object-cover"
            />
            {/* Like Button  */}
            <button
              className={`relative my-1 mx-1 ${
                likedPosts.includes(post.id) ? "bg-red-500 blur-sm" : "bg-white"
              }`}
              onClick={() => toggleLike(post.id)}
              style={{ position: "relative" }}
            >
              {/* Blurred background */}
              <div
                className={`absolute top-0 left-0 w-full h-full  ${
                  likedPosts.includes(post.id) ? "blur-md" : ""
                } rounded-full`}
                style={{
                  zIndex: -1,
                  backgroundImage: `url(./assets/like96.png)`,
                  backgroundSize: "cover",
                }}
              ></div>
              {/* Heart image */}
              <img
                src={"./assets/like96.png"}
                alt="Like"
                className="z-10 rounded-full"
                style={{ width: "40px", height: "40px" }}
              />
            </button>

            {/* Comment Button */}
            <button
              className="text-indigo-500 font-bold hover:text-indigo-700"
              onClick={() => toggleComments(post.id)}
            >
              <img
                src={"./assets/comment96.png"}
                alt="Like"
                className="z-10 rounded-full"
                style={{ width: "40px", height: "40px" }}
              />
            </button>

            <span className="float-end font-bold me-5 my-2">
              {post.totalLike} Likes
            </span>

            <div className="px-6 py-2 ">
              <p className="text-gray-700 font-semibold	 text-base">
                {post.description}
              </p>
            </div>

            {/* Add comments section */}

            <div className="px-6 py-2">
              {showComments[post.id] && (
                <div className="h-20 overflow-y-auto">
                  {/* Display comments here */}
                  {post.comments.map((comment, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src="./assets/user100.png"
                        alt="profile"
                        className="rounded-full"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <span className="font-bold ps-1 py-1 ml-1">
                        {comment.userName}:
                      </span>
                      <span className="ps-1">{comment.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div key={post.id} className="flex items-center px-2 py-2">
              <input
                key={post.id}
                className="form-control mt-2"
                type="text"
                placeholder="Add a comment..."
                autoComplete="off"
                value={addComment[post.id] || ""}
                onChange={(e) => {
                  setAddComment({
                    [post.id]: e.target.value,
                  });
                }}
              />
              <button onClick={() => handleAddComment(post.id)}>
                <img
                  src="./assets/send90.png"
                  alt="send"
                  className="mt-2 rounded-full"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
