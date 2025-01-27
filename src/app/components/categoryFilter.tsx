interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
  }
  
  export default function CategoryFilter({
    categories,
    selectedCategory,
    setSelectedCategory,
  }: CategoryFilterProps) {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  