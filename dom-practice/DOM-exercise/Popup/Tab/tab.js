const $spinner = document.querySelector('.spinner');
const $tabs = document.querySelector('.tabs');
const $nav = document.createElement('nav');

$spinner.style.display = 'block';

const renderTab = data => {
  $spinner.style.display = 'none';
  document.documentElement.style.setProperty('--tabs-length', data.length);
  const $navFrag = document.createDocumentFragment();
  const $contentFrag = document.createDocumentFragment();

  data.forEach(({id, title, content }) => {
    const $input = document.createElement('input');
    const $label = document.createElement('label');
    const $tabContent = document.createElement('div');

    $input.type = 'radio';
    $input.name = 'tab';
    $input.id = id;

    $label.classList.add('tab');
    $label.textContent = title;
    $label.setAttribute('for', id);

    $navFrag.appendChild($input);
    $navFrag.appendChild($label);

    $tabContent.textContent = content;
    $tabContent.classList.add('tab-content');
    $tabContent.setAttribute('data-id', id);
    $contentFrag.appendChild($tabContent);
  });

  const $glider = document.createElement('div');
  $glider.classList.add('glider');
  $nav.appendChild($navFrag);
  $nav.appendChild($glider);
  $tabs.appendChild($nav);
  $tabs.appendChild($contentFrag);

};


const fetchTabsData = () => {
  return new Promise(resolve => {
    isLoading = true;
    setTimeout(
      () => 
        resolve([
          {
            id: 1,
            title: 'HTML',
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
          },
          {
            id: 2,
            title: 'CSS',
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`
          },
          {
            id: 3,
            title: 'JavaScript',
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`
          }
        ]),
      1000
    );
  });
};

const selectTab = tab => {
  const $glider = document.querySelector('.glider');
  const id = tab.getAttribute('for');
  $glider.style.transform = `translate3d(${},0,0)`
  const $tabContentList = [...document.querySelectorAll('.tab-content')];
  $tabContentList.forEach(content => content.classList.toggle('active', id === content.dataset.id));
}

// Do something!
document.addEventListener('DOMContentLoaded', fetchTabsData().then(renderTab).catch(console.err));

$tabs.addEventListener('click', e => {
 if(e.target.classList.contains('tab')) {
   selectTab(e.target);
 }
})
