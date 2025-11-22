setTimeout(() => {
  // Get all the the courses that user have taken, in progress and registered for next semester
    const items = Array
  .from(
    document
    .querySelectorAll("p.MuiTypography-root.MuiTypography-body2"))
    .filter(item => 
    {
        const innerHTML = item.innerHTML.trim();
        return (innerHTML.length === 8
        || (innerHTML.length === 9 && innerHTML.includes("L"))) && !innerHTML.includes("FLENT");
    }
    )
    .map(item => item.innerHTML.trim());
    const uniqueItems = [...new Set(items)];

  console.log(uniqueItems);
  console.log(items);
}, 10000);