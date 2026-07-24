export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
    }).format(dateObj);
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
