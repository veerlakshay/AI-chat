# Chatbot Project 🤖  

This project is a feature-rich chatbot application with a **frontend built in Angular** and a **backend powered by Spring Boot**. The chatbot leverages AI models to provide intelligent, context-aware responses and generate visually appealing images.  

---

## Features 🚀  

### 1. **General Question Answering**  
- The chatbot can answer a wide range of general questions using advanced AI models.  
- Users can input any query, and the chatbot provides accurate and relevant responses.  

### 2. **Sports Question Answering**  
- Specialized in answering sports-related queries with precise and domain-specific responses.  

### 3. **Image Generation**  
- Users can generate images by providing a description.  
- Supports specifying the number of images required.  
- AI-generated images are designed to look natural and visually engaging.  

---

## Technologies Used 🛠️  

### **Frontend**  
- **Framework**: Angular  
- **Key Features**: Dynamic chatbot interface with an intuitive user experience  

### **Backend**  
- **Framework**: Spring Boot  
- **Core Functionality**: Handles AI-based responses and image generation requests  

### **AI Models**  
- **Response Generation**: Powered by gpt-4o 
- **Image Generation**: Utilizes state-of-the-art image generation model DALL-E

---

## Installation and Setup 📦  

### Prerequisites  
- Node.js and npm (for the frontend)  
- Java and Maven (for the backend)  
- API keys for the AI services used 
### Steps  

#### 1. Clone the Repository  
```bash  
git clone https://github.com/veerlakshay/AI-chat.git  

cd frontend  
npm install  
ng serve  

cd backend  
mvn clean install  
mvn spring-boot:run  
