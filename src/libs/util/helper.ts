export const slugify = (text: string) => {
  return (
    text
      .toString() // Cast to string (optional)
      .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase() // Convert the string to lowercase letters
      .trim() // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, "-") // Replace spaces with -
      // eslint-disable-next-line no-useless-escape
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      // eslint-disable-next-line no-useless-escape
      .replace(/\-\-+/g, "-")
  ); // Replace multiple - with single -
};
