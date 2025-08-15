# 📋 Internal Audit Mobile App

A simple **React Native** mobile app that simulates a **SaaS internal auditing system** with **role-based access control**, **multi-step audit creation**, and **policy viewing** via WebView.  
Built with **Redux Toolkit**, **Redux Persist**, and **TypeScript** for state management and data persistence.

---

## 📌 Features

### 1. **Role-Based Login (No Backend)**

- User selects role: **Admin**, **Auditor**, or **Viewer** from a login screen.
- Role is stored locally using **Redux Persist**.

### 2. **Home Screen with Audit List**

- **Auditor** → Can create new audits.
- **Viewer** → Can only view audits.
- **Admin** → Can view and delete audits.

### 3. **Create New Audit (Multi-Step)**

- Collects:
  - **Title**
  - **Ratings** (numeric values)
  - **Checkbox checks**
  - **Comments**
  - **Image** (captured or from gallery via `react-native-image-crop-picker`)
- Stored in Redux and displayed on the home screen.

### 4. **Audit History**

- FlatList showing:
  - Title
  - Timestamp
  - Ratings
  - Checks
  - Comments
  - Image (if available)
- **Delete option** only for Admins.

### 5. **Policy Viewer**

- WebView screen showing an **audit policy/manual**.

### 6. **Logout**

- Clears persisted login state.

---

## 🛠 Tech Stack

- **React Native** (UI framework)
- **TypeScript** (type safety)
- **Redux Toolkit** (state management)
- **Redux Persist** (local storage)
- **React Navigation** (screen navigation)
- **react-native-image-crop-picker** (image selection & capture)
- **react-native-webview** (policy document viewing)

---

## 📂 Folder Structure

## 🚀 Installation & Setup

1. **Clone Repository**
   ```bash
   git clone
   cd internal-audit-app
   ```
