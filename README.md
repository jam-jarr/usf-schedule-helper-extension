Basic Functionality User Story:

I want to be able to see which classes I should take next semester in order to graduate as soon as possible.

It should prioritize courses with the most courses that depend on it.

Detail implementation:

Module 1: Take all user's courses information:

- Option 1: Use a chrome extension to enable web scraping (css selector)
  store all the courses user have taken and need to take to the database

Module 2: Find all courses that need pre-reqs:

- Option 1: set up a mock data (real courses now) databases that store all the classes
  that pre-req (linked) together (just for the hackathon) (Need ERM, RDMBS)
  Scrape pre-req information from USF catalog
- Idea: Rank them based on pre-reg lenght
- Downside: Out sys can't tell the difference between required and electives

(Advanced) Module 3: Find all the courses being offered next semester (to filter out courses not available):

- Option 1: scrape staff course search to show all the courses
- Option 2: use a mock database (real courses now) that already store all the courses that
  are available

Module 4: Suggest Course Schedule

- Option 1: Return a list of suggested courses to take next semester in order to graduate on time.
  Tell the user their expected graduation date.
- Option 2: (Very advanced) Return a full schedule of the courses needing to be taken.

-> All pre-reg (must take)
-> Recommendation
degreeworks: future implementation

Idea: Just use mock data in database and then implement dynamic update using
web scraping later
