const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    //tabButtons.ariaSelected = false; (this would likely work on dashed attributes , just not aria , we have aria-selected here)
    tab.setAttribute('aria-selected', false);
  })
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the assoscaited tabPanel and show it
  const {id} = event.currentTarget;
  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find in the array of tabPanels
  // convert tabPanels to a true array (done in const tabPanels)
  console.log(tabPanels); // now an array
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id); // implicit return of true or false
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick ));