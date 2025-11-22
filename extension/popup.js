document.getElementById("getCoursesBtn").addEventListener("click", () => {
  // Request courses from background
  chrome.runtime.sendMessage({ type: "GET_SUGGESTED_COURSES" }, (response) => {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    if (response.data && response.data.length > 0) {
      response.data.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
      });
    } else {
      courseList.innerHTML = "<li>No courses available yet.</li>";
    }
  });
});