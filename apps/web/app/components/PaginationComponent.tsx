'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const PaginationComponent = ({ total_pages, list, page }) => {
  const router = useRouter();

  const handlePrevPage = () => {
    if (page > 1) {
      router.push(`/${list}/${page - 1}`);
    }
  };

  const handleNextPage = () => {
    if (page < total_pages) {
      router.push(`/${list}/${page + 1}`);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-20">
      <a
        href={`/${list}/${page === 1 ? 1 : page - 1}`}
        className={`bg-[#5141EA] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handlePrevPage}
      >
        &lt;
      </a>
      <div className="text-white w-6 h-6 rounded-full flex items-center justify-center">
        {page}/{total_pages}
      </div>
      <a
        href={`/${list}/${page === total_pages ? total_pages: page + 1}`}
        className={`bg-[#5141EA] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${
          page === total_pages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleNextPage}
      >
        &gt;
      </a>
    </div>
  );
};

export default PaginationComponent;
