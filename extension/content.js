window.onload = () => {
  const items = Array.from(
    document.querySelectorAll("p.MuiTypography-root.MuiTypography-body2")
  )
  .filter(item => {
    const innerHTML = item.innerHTML.trim();
    return (innerHTML.length === 8 || (innerHTML.length === 9 && innerHTML.includes("L"))) 
           && !innerHTML.includes("FLENT");
  })
  .map(item => item.innerHTML.trim());

  const uniqueItems = [...new Set(items)];

  console.log(uniqueItems);

  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage({ type: "COURSES_DATA", data: uniqueItems });
  }
};