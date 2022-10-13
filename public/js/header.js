
let navbarItemsNames = [{name : "Home", path: "index.html"},{name : "Try it!", path: "test.html"},{name : "Gallery", path: "gallery.html"},
 {name: "Documentation", path: "https://github.com/LucasMW/Headache/wiki"}, {name: "Thesis", path: "https://github.com/LucasMW/HeadacheLatex"}, {name: "Examples", path: "https://github.com/LucasMW/Headache/tree/master/examples"},
{name:"VSCode Extension", path: "downloads/headache-VSCODE-syntax.zip"} ]
function getNavBar() {
    let path = document.location.pathname.substring(1);
    console.log(path);
    let lis = ""
    navbarItemsNames.forEach(element => {
        lis += `<li class="nav-item ${path.includes(element.path) ? "active" : ""}">
        <a class="nav-link" href="${element.path}">${element.name} </a>
      </li>\n`;
    });
    let html = `
    <a class="navbar-brand" href="#">Headache</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${lis}
          </ul>
        </div>
          `;
    return html;
}
function loadNavbar() {
    document.getElementsByClassName('navbar')[0].innerHTML = getNavBar();
}
function hello() {
    console.log("Hi!");
}
function navbarHandler(){
  let path = document.location.pathname.substring(1);
  let x = navbarItemsNames.find(element => { return path.includes(element.path)});
  console.log("Found navbar? " + x);
  if(x != undefined) {
    loadNavbar();
  }
}
navbarHandler();
