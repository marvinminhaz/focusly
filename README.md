

# 🌿 Focusly — A Clean & Minimalist To-Do App

Focusly is a lightweight, distraction-free to-do list application built using **HTML, CSS, and vanilla JavaScript**.
It focuses on simplicity, accessibility, theming, and a smooth user experience — all without external frameworks.

Designed to help you stay organized while enjoying a visually pleasing interface.

---

## ✨ Features

### 📝 Task Management

* Add new tasks instantly
* Mark tasks as complete
* Delete tasks with one click
* Auto-updating task counter
* Placeholder message when no tasks exist

### 🎨 Custom Themes

Focusly includes **5 beautiful themes**, each styled with custom CSS variables:

* 🌱 Default (Fresh Mint)
* 🌌 Tokyo Night
* 🌞 Solarized Light
* ❄️ Nord
* 🌸 Rose Pink

Themes:

* Apply instantly
* Persist using **localStorage**
* Highlight active theme button

### 💨 Smooth UX

* Auto-focus on input field
* Fluid color transitions
* Lightweight, fast, and fully responsive
* No libraries required

---

## 📸 Screenshots

```
<img width="1684" height="859" alt="screenshot-fresh-mint" src="https://github.com/user-attachments/assets/463685a0-1fcf-42e1-b0e7-83b46f26e6a0" />

/assets/screenshots/screenshot-fresh-mint.png
<img width="1401" height="835" alt="screenshot-nord" src="https://github.com/user-attachments/assets/609a777d-e4bf-461c-bcc9-2739d371f183" />

/assets/screenshots/screenshot-nord.png
<img width="1488" height="798" alt="screenshot-solarized" src="https://github.com/user-attachments/assets/49c0723c-d37c-4ffd-b071-2ded4e00d6f7" />

/assets/screenshots/screenshot-solarized.png
<img width="1509" height="810" alt="screenshot-tokyo-night" src="https://github.com/user-attachments/assets/dfe71607-7fd7-45fd-91ad-a8318b8d95ec" />

/assets/screenshots/screenshot-toyko-night.png
<img width="1589" height="864" alt="screenshot-rose-pink" src="https://github.com/user-attachments/assets/4845a75d-fa89-4dc3-a5e8-472435bce496" />

/assets/screenshots/screenshot-rose-pink.png
```

---

## 📂 File Structure

```
focusly/
│── index.html
│── style.css
│── script.js
│── README.md
└── /assets/screenshots
```

---

## 🛠️ Technologies Used

* **HTML5** – structure
* **CSS3** – design, layout, themes, responsiveness
* **JavaScript (Vanilla)** – task logic, theming, DOM manipulation
* **localStorage** – theme persistence

---

## 📥 Installation & Usage

You can run Focusly locally in just a few seconds:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/focusly.git
```

### 2. Open the folder

```bash
cd focusly
```

### 3. Run the app

Simply open `index.html` in your browser.
No build steps. No dependencies.

---

## 🧠 How It Works

### Task Logic

* Elements are dynamically created via JavaScript

* Each task contains:

  * Checkbox
  * Text label
  * Delete button

* The task counter updates on:

  * Adding a task
  * Removing a task

* A placeholder task (`id="task-item1"`) is removed automatically once the first real task is added.

### Theming Logic

* Theme buttons contain `data-theme` attributes
* Clicking a button:

  * Updates `<body data-theme="">`
  * Saves theme to localStorage
  * Activates the button's visual state

---

## 🤝 Contributing

Contributions are welcome!
Here’s how you can help:

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a pull request

Suggestions, improvements, theme additions, and bug fixes are highly appreciated.

---

## 📄 License

MIT License — feel free to use and modify Focusly for personal or commercial projects.

---

## 💚 Acknowledgments

Focusly is built to be simple, elegant, and a joy to use.
Thank you for checking it out — enjoy getting things done!
