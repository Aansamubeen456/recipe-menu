const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: "$ 15",
    image: "./images/item-1.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: "$ 13.99",
    image: "./images/item-2.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 3,
    title: "Godzila milkshake",
    category: "shakes",
    price: "$ 6.99",
    image: "./images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: "$ 20",
    image: "./images/item-4.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 5,
    title: "patty burger",
    category: "lunch",
    price: "$ 5",
    image: "./images/item-5.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 6,
    title: "cookie shake",
    category: "shakes",
    price: "$ 25",
    image: "./images/item-6.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 7,
    title: "egg loaded",
    category: "breakfast",
    price: "$ 35",
    image: "./images/item-7.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 8,
    title: "classic food",
    category: "lunch",
    price: "$ 15.99",
    image: "./images/item-8.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 9,
    title: "milk shake",
    category: "shakes",
    price: "$ 10",
    image: "./images/item-9.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
  {
    id: 10,
    title: "juicy stake",
    category: "dinner",
    price: "$ 45",
    image: "./images/item-10.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt recusandae saepe quis doloremque ullam neque quo minus facilis unde.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnConatiner = document.querySelector(".btn-container");

// load all the menus
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayBtns();
});

// insert dynamically menus to dom
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
          <img src="${item.image}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h5>${item.title}</h5>
              <span class="price">${item.price}</span>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayBtns() {
  // use reduce method on menu array to get unique category
  const uniqueCategory = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  console.log(uniqueCategory);

  // insert dynamic buttons to dom
  let catBtns = uniqueCategory
    .map((category) => {
      return ` <button type="button" class="filter-btn btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnConatiner.innerHTML = catBtns;

  // filter buttons after dynamicall buttons are added.
  const filterBtns = btnConatiner.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      // console.log(category);
      const menuCategory = menu.filter((item) => {
        //   console.log(item.category === category);
        if (item.category === category) {
          return item;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
