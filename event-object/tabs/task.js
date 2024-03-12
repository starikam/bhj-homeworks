const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

tabs.forEach(el => el.addEventListener('click', event => {
    let currentSelectTab = Array.from(tabs).indexOf(event.currentTarget);
    let currentId = tabs[currentSelectTab].parentElement.parentElement.id;
    let currentTabs = document.querySelectorAll("#"+currentId+" >  div.tab__navigation > div.tab");
    let currentContent = document.querySelectorAll("#"+currentId+" >  div.tab__contents > div.tab__content");

    [...currentTabs].forEach(e => e.classList.remove('tab_active'));
    [...currentContent].forEach(e => e.classList.remove('tab__content_active'));

    tabs[currentSelectTab].classList.add('tab_active');
    tabsContent[currentSelectTab].classList.add('tab__content_active');
  }));