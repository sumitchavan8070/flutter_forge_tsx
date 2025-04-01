"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ComponentCard = ({ blog }) => {
  const { id, name, image_link, description, author, tags, created_at } = blog;
  // id,
  // name,  // This will now be used as the title
  // description,  // This is the paragraph in the original code
  // image_link,  // Image URL
  // tags,  // Tags, which is a string of tags
  // publisher_id,  // Assuming you need this for the author info
  // created_at
  const [imgSrc, setImgSrc] = useState(
    "https://techoutwebsitebkt.s3.amazonaws.com/Flutter_banner_1_cbf28d06a1.jpg",
  );

  const handleError = () => {
    setImgSrc(
      "https://techoutwebsitebkt.s3.amazonaws.com/Flutter_banner_1_cbf28d06a1.jpg",
    ); // Set your default image URL here
  };
  return (
    <>
      <div className="group relative my-8 w-80 overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blog-details?id=${id}&image=${encodeURIComponent(image_link)}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image_link} alt="image" fill />
        </Link>
        <div className="p-4 sm:p-6 md:px-4 md:py-6 lg:p-6 xl:px-4 xl:py-6 2xl:p-6">
          <h3>
            <Link
              href={`/blog-details?id=${id}&image=${encodeURIComponent(image_link)}`}
              className="mb-3 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {name}
            </Link>
          </h3>
          <p className="mb-4 border-b border-body-color border-opacity-10 pb-4 text-sm font-medium text-body-color dark:border-white dark:border-opacity-10">
            {description}
          </p>
          <div className="flex items-center">
            <div className="mr-3 flex items-center border-r border-body-color border-opacity-10 pr-3 dark:border-white dark:border-opacity-10 xl:mr-2 xl:pr-2 2xl:mr-3 2xl:pr-3">
              <div className="mr-3">
                {/* <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src={author?.image} alt="author" fill />
                </div> */}
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-xs font-medium text-dark dark:text-white">
                  By {author?.name}
                </h4>
                <p className="text-xs text-body-color">{author?.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-xs font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{created_at}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentCard;
