const range = document.querySelector("#range");
const fill = document.querySelector("#fill");
const views = document.querySelector("#views");
const price = document.querySelector("#price");
const check = document.querySelector("#check");
range.value = "60";
check.checked = false;
const setWidth = (width) => {
  fill.style.width = `${width}%`;
};
setWidth(50);
const setPrice = (amount) => {
  if (check.checked) {
    price.textContent = `$${amount - amount * 0.25}.00`;
  } else {
    price.textContent = `$${amount}.00`;
  }
};
const setViews = (view) => {
  if (view === 1) {
    views.textContent = `${view}m`;
  } else {
    views.textContent = `${view}k`;
  }
};
const updateStats = () => {
  switch (range.value) {
    case "20":
      setWidth(0);
      setPrice(8);
      setViews(10);
      break;
    case "40":
      setWidth(25);
      setPrice(12);
      setViews(50);
      break;
    case "60":
      setWidth(50);
      setPrice(16);
      setViews(100);
      break;
    case "80":
      setWidth(75);
      setPrice(24);
      setViews(500);
      break;
    case "100":
      setWidth(100);
      setPrice(36);
      setViews(1);
      break;
  }
};

range.addEventListener("input", updateStats);
check.addEventListener("input", updateStats);
