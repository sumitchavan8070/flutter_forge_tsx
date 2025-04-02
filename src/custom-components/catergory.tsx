"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ComponentCard from "./component_card";

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

      <section className="w-full">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category?.id} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800  py-2">{category?.name}</h2>
              <p className="text-gray-600 py-4">{category?.description}</p>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8  px-4 py-8" style={{gap:'20px'}}>
                {category?.Components?.length > 0 ? (
                  category?.Components?.map((component) => (
                    <div
                      key={component?.id}
                      className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
                    >
                       <ComponentCard blog={component} />
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
