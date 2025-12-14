# Simple Counter Application

This is a simple web-based counter application built using **HTML**, **CSS**, and **JavaScript**.

## 🛠️ Project Structure

The project consists of three main files:

* **`counter.html`**: The main structure of the application, including the counter display and the control buttons.
* **`counter.css`**: Provides styling for the counter display and the buttons.
* **`counter.js`**: Contains the JavaScript logic for incrementing, decrementing, and resetting the counter.

## 🚀 How to Run

1.  **Save the Files:** Ensure you have the following three files saved in the same directory:
    * `counter.html`
    * `counter.css`
    * `counter.js`
2.  **Open in Browser:** Open the `counter.html` file in any modern web browser (e.g., Chrome, Firefox, Edge).

## ✨ Features

The application provides the following functionality:

* **Display:** A label that shows the current count, initialized to `0`.
* **INCREMENT:** Increases the counter value by 1.
* **DECREMENT:** Decreases the counter value by 1.
* **RESET:** Resets the counter value back to `0`.

## ⚙️ Code Details

### `counter.html`

* Links the external `counter.css` file for styling.
* Includes a `<label>` with the `id="labelcounter"` to display the count.
* Contains a `<div>` with `id="buttonctnr"` for the buttons.
* Includes three `<button>` elements with distinct IDs (`increment`, `reset`, `decrement`) and a shared class (`buttons`).
* Loads the `counter.js` file at the end of the `<body>` for better performance.

### `counter.css`

* Styles the counter label (`#labelcounter`) with a large font size and centers the text.
* Uses Flexbox on `#buttonctnr` to center the buttons and create spacing (`gap`).
* Applies a consistent look and feel to all buttons (`.buttons`), including background color, text color, padding, and a hover effect.

### `counter.js`

* **DOM Element Retrieval:** Selects the three buttons and the counter label using their respective IDs.
* **State Management:** Declares a variable `let count = 0;` to store the current counter value.
* **Event Handlers:**
    * `increment.onclick`: Increments `count` and updates `labelCounter.textContent`.
    * `decrement.onclick`: Decrements `count` and updates `labelCounter.textContent`.
    * `reset.onclick`: Sets `count` to `0` and updates `labelCounter.textContent`.
