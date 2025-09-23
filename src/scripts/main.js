'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(listEl) {
  const items = [...listEl.querySelectorAll('li')];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => listEl.appendChild(item));
}

function getEmployees(listEl) {
  const items = [...listEl.querySelectorAll('li')];

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);

const employees = getEmployees(list);

employees.forEach(() => {});
