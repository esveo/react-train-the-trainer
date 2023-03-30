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
};
