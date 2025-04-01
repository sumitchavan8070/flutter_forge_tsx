import React from "react";
import Catergory from "@/custom-components/catergory";

const API_URL = "http://forge.geekaid.in/categories"; // Replace with your actual API URL

const fetchBlogData = async () => {
  try {
    const response = await fetch(API_URL, {
      cache: "force-cache", // Enables caching
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
};


const page = async () => {
  const blogData = await fetchBlogData();

  return <Catergory data={blogData} />;
};

export default page;
