"use client";
import { useState } from "react";
import { EnhancedSearchPanel } from "../search/enhanced-search-panel";

export const SearchSection = () => {
  return (
    <>
      <section className="container">
        <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
          <div className="pt-10 lg:pt-16">
            <h1 className="text-center text-lg font-bold lg:text-xl">
              Search Discount Tee Times
            </h1>
            <div className="block md:block">
              <div className="lg:pt-6 ">
                <div className="flex items-center justify-center">
                  <div className="w-[860px]">
                    {/* <Suspense fallback={<SearchPanelSkeleton />}>
                      <SearchPanelWrapper />
                    </Suspense> */}
                    {/* Search panel */}
                    <EnhancedSearchPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
