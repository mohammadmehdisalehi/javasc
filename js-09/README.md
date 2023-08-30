
---
# Contact Management Web App

This is a simple web application for managing a list of contacts. It allows you to add contacts with names, phone numbers, and storage locations (SIM or Device) and displays them in a contact list.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Code Explanation](#code-explanation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Contact Management Web App is built using HTML, JavaScript, and TypeScript. It provides a basic user interface for adding contacts and viewing them in a list.

## Features

- Add a new contact with a unique ID, name, phone number, and storage location.
- Display the list of added contacts.
- Show/hide the contact list drawer.
- Input validation and handling for empty values.

## Code Explanation

### Type Definitions

```typescript
type Contactprops = {
  id: string;
  contactName: string;
  phoneNumber: string | number;
  storage: "SIM" | "Device";
  avatar: string | null;
};

type ContactListType = Contactprops[];
const contactList: ContactListType = [];
```

This section defines TypeScript types for contact information and creates an empty array to store contacts.

### DOM Element Selection

```typescript
const contactNameInput = document.querySelector<HTMLInputElement>("#contactName");
const phoneNumberInput = document.querySelector<HTMLInputElement>("#phoneNumber");
const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
const deviceStorageInput = document.querySelector<HTMLInputElement>("#deviceStorage");
const showContactButton = document.querySelector<HTMLButtonElement>("#showContactButton");
const contentListDrawer = document.querySelector<HTMLButtonElement>("#contentListDrawer");
const closeDrawer = document.querySelector<HTMLButtonElement>("#closeDrawer");
const contactListElement = document.querySelector<HTMLUListElement>("#contactListElement");
```

Here, DOM elements are selected using `querySelector` to interact with them in JavaScript.

### Event Listeners

```typescript
showContactButton?.addEventListener("click", () => {
  contentListDrawer?.classList.remove("hidden");
});

closeDrawer?.addEventListener("click", () => {
  contentListDrawer?.classList.add("hidden");
});

submitButton?.addEventListener("click", () => {
  // Code for adding a new contact to the list and displaying it in the UI.
});
```

Event listeners are added to buttons for showing/hiding the contact list drawer and handling contact submission.

### Contact Submission

```typescript
submitButton?.addEventListener("click", () => {
  // Code for creating a new contact and adding it to the list.
});
```

This event listener handles contact submission. It creates a new contact object, adds it to the `contactList` array, and updates the UI to display the new contact.

## How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.
3. Use the provided interface to add contacts.
4. Click the "Show Contacts" button to view the contact list.
5. Click the "Close Drawer" button to hide the contact list.

## Authors
- [@MohammadMehdiSalehi](https://github.com/mohammadmehdisalehi)