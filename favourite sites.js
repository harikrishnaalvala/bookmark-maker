let bookMarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

function addBookmark() {
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    let listItem = document.createElement("li");
    bookmarksListEl.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteUrl;
    bookmarkUrl.href = siteUrl;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksListEl.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
}
siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*"
    } else {
        siteUrlErrMsgEl.textContent = ""
    }
});
siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*"
    } else {
        siteNameErrMsgEl.textContent = ""
    }
});
bookMarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});