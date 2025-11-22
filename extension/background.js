let coursesData = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "COURSES_DATA") {
    coursesData = message.data; // Save scraped courses
  }

  if (message.type === "GET_USER_COURSES") {
    sendResponse({ data: coursesData });
  }

  if (message.type === "GET_SUGGESTED_COURSES") {
    fetch("http://localhost:8000/get_suggested_courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ courses: coursesData })
    })
    .then(response => response.json())
    .then(data => {
      sendResponse({ success: true, suggestedCourses: data });
    })
    .catch(err => {
      console.error("Error sending courses:", err);
      sendResponse({ success: false, error: err.message });
    });

    return true; // keep sendResponse channel open for async fetch
  }

  // for other message types
  return false;
});