"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import CategoryFilter from "./components/categoryFilter";
import ContentList from "./components/contentList";
import { fetchData } from "./utils/fetchData";
import { Content } from "./types/content";

export default function Home() {
  const [contents, setContents] = useState<Content[]>([]);
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const loadContents = async () => {
      const data = await fetchData();
      setContents(data);
      setFilteredContents(data);

      const uniqueCategories = Array.from(
        new Set(data.map((content) => content.category))
      );
      setCategories(uniqueCategories);
    };

    loadContents();
  }, []);

  useEffect(() => {
    let updatedContents = contents;

    if (searchTerm) {
      updatedContents = updatedContents.filter((content) =>
        content.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      updatedContents = updatedContents.filter(
        (content) => content.category === selectedCategory
      );
    }

    setFilteredContents(updatedContents);
  }, [searchTerm, selectedCategory, contents]);

  return (
    <div className="mx-auto">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="max-w-6xl container mx-auto p-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ContentList contents={filteredContents} />
      </div>
    </div>
  );
}
