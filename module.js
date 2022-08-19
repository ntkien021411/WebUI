const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".line");

// console.log([tabActive]);
// console.log([line]);

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";

//
// console.log(tabs);
// console.log(panes);

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    // for (let index = 0; index < tabs.length; index++) {
    //    if(tabs[index].classList.contains('active')){
    //     tabs[index].classList.remove('active');
    //     // console.log(tabs[index]);
    //    }
    // // console.log(tabs[index].classList);
    // }

    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

        line.style.width = this.offsetWidth + 'px';
    line.style.left = this.offsetLeft + 'px';

    // console.log(this);
    this.classList.add("active");
    panes[index].classList.add("active");
    // const tabActive = $(".tab-item.active");
    // console.log(tabActive);
    // line.style.width = tabActive.offsetWidth + "px";
    // line.style.left = tabActive.offsetLeft + "px";
  };
});
