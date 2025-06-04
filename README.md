# 🌐 Task Manager Application with Angular & Spring Boot

A robust full-stack web application featuring:

- **Frontend**: Angular  
- **Backend**: Spring Boot  
- **Deployment**: Docker-Compose (optional)

---

## 📁 Project Structure

```
project-root/
├── Frontend/             # Angular application
├── Backend/              # Spring Boot application
├── docker-compose.yml    # Docker configuration
└── README.md             # Project guide (this file)
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+)
- **npm** or **Yarn** (for Angular)
- **Java JDK** (v17+)
- **Apache Maven**
- **Docker** & **Docker Compose** (optional for containerized setup)
- **Git**

---

## Clone the Repository

```bash
git clone https://github.com/Xioketh/Task-Manager-App.git

cd Task-Manager-App
```

---

## 🚀 Getting Started

You can run the application in **two different ways**:

---

### 🔧 Option 1: Run Frontend & Backend Manually

#### 🖥️ Frontend (Angular)

```bash
# Navigate to frontend folder
cd Frontend

# Install dependencies
npm install --legacy-peer-deps

# Run development server
ng serve
```

- App will be available at: [http://localhost:4200](http://localhost:4200)

---

#### ⚙️ Backend (Spring Boot)

```bash
# Navigate to backend folder
cd ../Backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

- API will be available at: [http://localhost:8080](http://localhost:8080)

---

### 🐳 Option 2: Run Entire Stack with Docker

```bash
# From project root
docker-compose up --build
```

- Angular: [http://localhost:4200](http://localhost:4200)  
- Spring Boot: [http://localhost:8080](http://localhost:8080)

To stop containers:

```bash
docker-compose down
```

---

## 📝 Notes

- You can choose **any method** that suits your development or deployment workflow.
- Make sure ports **4200** (Angular) and **8080** (Spring Boot) are available on your system.

---

## 📫 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
