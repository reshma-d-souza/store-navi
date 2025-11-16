const shops = {
    1: ["Electronics Store", "Clothing Store", "Grocery", "Pharmacy"],
    2: ["Bookstore", "Toy Store", "Cafe", "Bakery"],
    3: ["Jewelry", "Sports Store", "Furniture", "Music Store"]
};

let selectedItems = [];

const floorSelect = document.getElementById("floorSelect");
const shopList = document.getElementById("shopList");
const selectedItemsEl = document.getElementById("selectedItems");
const navigationInfo = document.getElementById("navigationInfo");

function renderShops(floor) {
    shopList.innerHTML = "";
    shops[floor].forEach(shop => {
        const li = document.createElement("li");
        li.textContent = shop;
        li.addEventListener("click", () => selectShop(shop));
        shopList.appendChild(li);
    });
}

function selectShop(shop) {
    if (!selectedItems.includes(shop)) {
        selectedItems.push(shop);
        renderSelectedItems();
        updateNavigation();
    }
}

function renderSelectedItems() {
    selectedItemsEl.innerHTML = "";
    selectedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => removeSelectedItem(item));
        selectedItemsEl.appendChild(li);
    });
}

function removeSelectedItem(item) {
    selectedItems = selectedItems.filter(i => i !== item);
    renderSelectedItems();
    updateNavigation();
}

function updateNavigation() {
    if (selectedItems.length === 0) {
        navigationInfo.textContent = "Select items to see shortest path.";
    } else {
        navigationInfo.textContent = "Shortest path: " + selectedItems.join(" → ");
    }
}

// Initialize
floorSelect.addEventListener("change", (e) => renderShops(e.target.value));
renderShops(floorSelect.value);
