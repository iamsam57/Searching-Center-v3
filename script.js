const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("siteSearch");
const searchResult = document.getElementById("searchResult");

const searchTopics = {
  math: "Opening Math ideas: try equations, fractions, geometry, or algebra practice.",
  algebra: "Algebra is part of Math. Start with expressions, variables, and graphing.",
  google: "Google Tools includes Docs, Slides, Classroom, and Drive organization tips.",
  docs: "Docs is a great place to draft notes, essays, and class reflections.",
  language: "Language Arts includes reading responses, vocabulary, grammar, and essays.",
  essay: "Essay help lives in Language Arts. Focus on outlining, evidence, and revision.",
  social: "Social Studies covers history, geography, civics, and world cultures.",
  history: "History is available in Social Studies. Try timelines, primary sources, and maps."
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResult.textContent = "Type a keyword to explore the portal.";
    return;
  }

  const matchedTopic = Object.entries(searchTopics).find(([keyword]) =>
    query.includes(keyword)
  );

  if (matchedTopic) {
    searchResult.textContent = matchedTopic[1];
    return;
  }

  searchResult.textContent = `No exact match for "${query}" yet, but try Math, Google Tools, Language Arts, or Social Studies.`;
});
