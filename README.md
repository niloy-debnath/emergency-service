Live Site: https://niloy-debnath.github.io/emergency-service/

✅ 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

===> getElementById is usually use to select a element using id,it usually use in DOM so that we can easily go through a element using it's unique id.

getElementsByClassName is also used in DOM,by using it we can select or identify a group of same elements.It is very helpful while traversing between different elements.Mainly we have many buttons or event items we use it so that we can get better interaction with users.

querySelector is a JavaScript DOM method that let us select the first matching element in the document using a CSS selector.

querySelectorAll finds all matching elements.It returns a NodeList that you we can loop through.

---

✅ 2.How do you create and insert a new element into the DOM?

==> Firstly I need to select the div or section,I mean the parent where we want to insert a new element.Then I will create a element using document.createElement("desired-element") and and then using innerHTML I will write or design the element I want to insert.After that I will append the created element in the parent using append.
for example:
let historyCardContainer = document.getElementById(
"history-card-container"  
);

const newCallHistory = document.createElement("div");

    newCallHistory.innerHTML = `
       <div
            class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between mt-3 items-center"
          >
            <div>
              <h1 class="font-semibold">${cardTitle}</h1>
              <h2 class="text-[#5C5C5C] hind-madurai-regular">${number}</h2>
            </div>
            <div>
              <h1>${timeString}</h1>
            </div>
          </div>
    `;

    historyCardContainer.append(newCallHistory);

---

✅ 3.What is Event Bubbling and how does it work?

===> When we click on a child element, the event also travels up like bubbles and triggers the same type of event on its parents, grandparents,until the top(document).

✅ 4.What is Event Delegation in JavaScript? Why is it useful?

====> when instead of applying eventlistener in every element or child we just use event listener on the parent element it is called even delegation.

➡️ It's useful because it consumes less memory.
➡️ works dynamically
➡️ easy to manage

✅ 5.What is the difference between preventDefault() and stopPropagation() methods?

️➡️ PreventDefault() used to stop the website from refreshing when any types of "form" is available in the code.Usually after submitting any kinds of form the website get refreshed.But after applying PreventDefault() the page doesn't get refreshed.

stopPropagation() stops the event from bubbling up the DOM tree.
It does not prevent the default browser action.
