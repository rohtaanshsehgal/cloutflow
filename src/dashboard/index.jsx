import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import Loading from "../components/Loading";
import useFetchPosts from "../hooks/useFetchPosts";
import Select from "../components/Select";
import PostCard from "../components/PostCard";
function Dashboard() {
    const [filters, setFilters] = useState({ reposted: null });
  const [query, setQuery] = useState({ keyword: "", fromMembers: [], contentType: "" });
  const contentTypeOptions = ["Text", "Image", "Video"];
  const repostedOptions = ["Only Original", "Only Reposted"];
  
  const { topPosts, loading, error } = useFetchPosts(query, filters.reposted);
  return (
    <div
      className={`flex flex-col items-center justify-start pt-4
       min-h-screen bg-gradient-to-r from-yellow-100 via-white to-yellow-100`}
    >
      <div className="w-full  p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Search for Linkedin Posts
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <SearchInput
            value={query.keyword}
            onChange={(e) => {
              const value = e.target.value;
              setQuery({ ...query, keyword: value });
            }}
            placeholder="Start typing to search..."
          />
          <Select
            options={contentTypeOptions}
            placeholder="Select Content Type"
            value={query.contentType}
            onChange={(value) => setQuery({ ...query, contentType: value })}
          />
          <Select
            options={repostedOptions}
            placeholder="Select Repost Filter"
            value={filters.reposted === true ? "Only Reposted" : filters.reposted === false ? "Only Original" : ""}
            onChange={(value) =>
              setFilters({ reposted: value === "Only Reposted" ? true : value === "Only Original" ? false : null })
            }
          />
        </div>
        {loading && <Loading />}
        {!loading && (
          <div className="mt-6">
            {topPosts.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {topPosts.map((post, index) => (
                    <PostCard key={index} post={post} />
                  ))}
                </div>
              </div>
            )}
            {!loading && topPosts.length === 0 && query.keyword && !error && (
              <p className="text-gray-500 text-center">No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;