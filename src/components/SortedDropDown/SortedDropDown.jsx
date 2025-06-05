export default function SortedDropDown({ sortBy, setSortBy }) {
   const handleSortChange = (e) => {
      setSortBy(e.target.value);
   };
   
   return (
      <select name="sort" id="sort" value={sortBy} onChange={handleSortChange}>
         <option value="A-Z">A to Z</option>
         <option value="Z-A">Z to A</option>
         <option value="PRICE_LOW">Less than 10$</option>
         <option value="PRICE_HIGH">Greater than 10$</option>
         <option value="POPULAR_HIGH">Popular</option>
         <option value="POPULAR_LOW">Not popular</option>
         <option value="">Show all</option>
      </select>
   );
   }
   