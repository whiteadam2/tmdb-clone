export function getFullURL(category, subCategory, page = 1) {
  return `https://api.themoviedb.org/3/${category}/${subCategory.replaceAll(
    "-",
    "_"
  )}?api_key=da929b028e582d822da2b29c607baadf&page=${page}`;
}
