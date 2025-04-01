"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ComponentCard from "./component_card";
import SingleBlog from "@/components/Blog/SingleBlog";

interface Component {
  id: number;
  name: string;
  description: string;
  category_id: number;
  gist_link: string;
  image_link: string;
  app_route: string;
  video_link: string;
  publisher_id: number;
  tags: string;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  icon_link: string;
  Components: Component[];
  created_at: string;
  updated_at: string;
}

interface Response {
  message: string;
  result: Category[];
  status: number;
}

const Category = ({ data }: { data: Response }) => {
  const [categories, setCategories] = useState<Category[]>(data?.result);

  return (
    <>
      <Breadcrumb
        pageName="Flutter Components"
        description="Stay updated with the latest trends, tips, and best practices in Flutter development."
      />

      <h2 className="my-8 text-center text-3xl font-bold">Flutter Components</h2>

      <section className=""> {/* Adjust top padding */}
        <div className="container px-4"> {/* Added horizontal padding to container */}
          {categories.map((category) => (
            <div key={category?.id} className="my-16">
              <h2 className="my-16 text-left text-3xl font-bold">{category?.name}</h2>
              <p className="m-4 text-lg text-gray-600">{category?.description}</p>
              <div className="mx-4 my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
                {category?.Components?.length > 0 ? (
                  category?.Components?.map((component) => (
                    <div
                      key={component?.id}
                      className="w-full px-4 flex justify-start items-start w-max rounded-lg" // Ensures that each component is centered in its grid item
                    >
                      <ComponentCard blog={component}/>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No components available.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
