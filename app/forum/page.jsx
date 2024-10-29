"use client";
import React, { useState, useEffect } from "react";
import FarmerNav from "../components/FarmerNav";
import { FaHeart, FaComment } from "react-icons/fa";

const posts = [
    {
      id: 1,
      title: "Exploring Historical Sites in Africa",
      category: "Heritage Tourism",
      content: [
        "Discover ancient civilizations.",
        "Learn about cultural practices.",
        "Visit UNESCO World Heritage Sites.",
        "Experience local traditions.",
        "Participate in community activities."
      ],
      question: "What historical site has impacted you the most?",
      image: "/one.jpg", // Replace with your image path
      author: "heritageExplorer",
      date: "October 10, 2024",
    },
    {
      id: 2,
      title: "Dark Tourism: Visiting the Past",
      category: "Cultural Experiences",
      content: [
        "Understanding the significance of dark tourism.",
        "Ethical considerations when visiting such sites.",
        "How to approach these experiences respectfully.",
        "Personal reflections on dark tourism.",
        "Future trends in dark tourism."
      ],
      question: "Have you visited a dark tourism site? Share your experience!",
      image: "/two.jpg", // Replace with your image path
      author: "darkTourist",
      date: "October 15, 2024",
    },
    {
      id: 3,
      title: "The Role of Museums in Preserving Heritage",
      category: "Cultural Education",
      content: [
        "Understanding the importance of museums.",
        "How museums curate cultural heritage.",
        "Educational programs for visitors.",
        "The impact of technology in exhibitions.",
        "Future of museums in heritage tourism."
      ],
      question: "What museum has left a lasting impression on you?",
      image: "/three.jpg", // Replace with your image path
      author: "museumLover",
      date: "October 20, 2024",
    },
    {
      id: 4,
      title: "Exploring the Ghost Towns of the West",
      category: "Cultural Experiences",
      content: [
        "History of abandoned towns.",
        "What remains of these historical sites.",
        "Legends and ghost stories associated.",
        "Tourist attractions in ghost towns.",
        "Impact of tourism on preservation efforts."
      ],
      question: "Have you ever visited a ghost town? What was your experience?",
      image: "/four.jpg", // Replace with your image path
      author: "ghostTownAdventurer",
      date: "October 25, 2024",
    },
    {
      id: 5,
      title: "The Significance of Historical Trails",
      category: "Heritage Tourism",
      content: [
        "Exploring famous historical trails.",
        "Cultural stories behind each trail.",
        "Impact of walking trails on local communities.",
        "Adventure and exploration opportunities.",
        "Preservation of trail heritage."
      ],
      question: "What historical trail would you love to hike?",
      image: "/five.jpg", // Replace with your image path
      author: "trailExplorer",
      date: "October 30, 2024",
    },
    {
      id: 6,
      title: "Culinary Heritage: Tasting History",
      category: "Cultural Experiences",
      content: [
        "Exploring traditional cuisines.",
        "Cultural significance of food in heritage.",
        "How food tours can enhance tourism.",
        "Recipes passed down through generations.",
        "Culinary festivals celebrating heritage."
      ],
      question: "What traditional dish connects you to your heritage?",
      image: "/six.jpg", // Replace with your image path
      author: "foodieHistorian",
      date: "November 5, 2024",
    },
  ];
  

const categories = ["All", "Heritage Tourism", "Cultural Experiences", "Cultural Education"];

const ForumPage = () => {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Retrieve comments and likes from localStorage
    const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setComments(storedComments);
    setLikes(storedLikes);

    // Initialize likes count for posts
    const initialLikes = posts.reduce((acc, post) => {
      acc[post.id] = storedLikes[post.id] || 0;
      return acc;
    }, {});
    setLikes(initialLikes);
  }, []);

  const handleCommentSubmit = (postId) => (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const updatedComments = {
        ...comments,
        [postId]: [
          ...(comments[postId] || []),
          { text: newComment, author: "User" },
        ],
      };
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");
    }
  };

  const handleLike = (postId) => {
    const updatedLikes = { ...likes, [postId]: (likes[postId] || 0) + 1 };
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.some((point) =>
        point.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <FarmerNav />

      {/* Header with Categories and Search Bar */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col justify-between mt-28 lg:w-1/2 w-full px-6 p-4 bg-white shadow">
          <div className="relative inline-block">
          <button className="py-2 px-4">All Posts</button>
            <button className="py-2 px-4">My Posts</button>
            <button className="py-2 px-4" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Categories
            </button>
            <div className={`${dropdownOpen ? "block" : "hidden"} absolute mt-2 py-2 bg-white border rounded shadow-lg`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-4 py-2 w-1/3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div
          className="container lg:w-1/2 w-full px-6 p-8 text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/one.jpg')" }}
        >
          <h2 className="text-2xl font-bold text-white">
            Welcome to Our Forum!
          </h2>
          <p className="mt-2 text-lg text-white">
            Join discussions on Historical Heritage Tourism and hidden histories.
          </p>
        </div>
      </div>

      <div className="container lg:w-1/2 w-full px-6 lg:px-0 mx-auto mt-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-6"
          >
            <div className="flex items-center mb-4">
              <img
                src="/avatar.png"
                alt="User Icon"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </div>

            <div className="mb-4 space-y-2">
              {post.content.map((point, index) => (
                <p key={index} className="text-gray-700">
                  {index + 1}. {point}
                </p>
              ))}
            </div>

            <img
              src={post.image}
              alt="Post visual"
              className="w-full h-64 object-cover mb-4"
            />

            <button onClick={() => handleLike(post.id)} className="flex items-center text-blue-500 mb-4">
              <FaHeart className="mr-2" /> Like {likes[post.id] || 0}
            </button>

            <p className="bg-yellow-100 p-4 rounded-md text-gray-900 font-medium italic mb-4">
              {post.question}
            </p>

            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold">Comments</h3>
              <div className="mt-4">
                {comments[post.id]?.length > 0 ? (
                  comments[post.id].map((comment, index) => (
                    <div key={index} className="mb-4 border-b pb-4">
                      <p className="text-gray-800">{comment.text}</p>
                      <div className="text-sm text-gray-500">
                        - {comment.author}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No comments yet. Be the first to share your thoughts!
                  </p>
                )}
              </div>

              <form onSubmit={handleCommentSubmit(post.id)} className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 border rounded-md"
                  placeholder="Write a comment..."
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
