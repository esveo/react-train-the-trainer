window.onload = () => {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (const heading of headings) {
    const id = heading.id;

    const link = document.createElement("a");

    link.href = `#${id}`;

    link.classList.add("heading-link");
    link.textContent = "#";

    heading.appendChild(link);
  }

  const allBodyChildren = [...document.body.children];
  let current = null;
  for (const child of allBodyChildren) {
    if (child.classList.contains("break")) {
      current = child;
    } else {
      current?.appendChild(child);
    }
  }

  location.hash = location.hash;

  /**
   * @type {Array<HTMLAnchorElement>}
   */
  const allLinks = [...document.querySelectorAll(".heading-link")];
  document.addEventListener(
    "scroll",
    debounce(() => {
      const firstVisible = allLinks.find((link) => {
        return link.getBoundingClientRect().top >= 0;
      });

      history.pushState(null, "", firstVisible?.href || "");
    }, 200)
  );
};

function debounce(func, delay) {
  let inDebounce;
  return function debounced() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
