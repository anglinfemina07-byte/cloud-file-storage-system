# Cloud File Storage System

## Overview

The **Cloud File Storage System** is a cloud-based web application that enables users to securely upload, store, and manage files using **Amazon Simple Storage Service (Amazon S3)**. The project is developed using **Node.js**, **Express.js**, and the **AWS SDK**, providing a lightweight RESTful backend for cloud storage operations.

The application demonstrates seamless integration between a web interface and Amazon S3, allowing users to upload and delete files efficiently while leveraging the scalability and reliability of cloud storage.

---

## Features

- Secure file upload to Amazon S3
- Delete files from the S3 bucket
- RESTful API implementation using Express.js
- File handling with Multer middleware
- Cross-Origin Resource Sharing (CORS) support
- Environment variable support using Dotenv
- Lightweight and scalable backend architecture
- Easy integration with a web-based frontend

---

## Technology Stack

### Backend
- Node.js
- Express.js
- AWS SDK for JavaScript
- Multer
- Dotenv
- CORS

### Cloud Services
- Amazon S3
- AWS IAM

### Frontend
- HTML5
- CSS3
- JavaScript

---

## Project Structure

```
cloud-file-storage-system/
│
├── server.js
├── package.json
├── package-lock.json
├── uploads/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
└── README.md
```

---

## Prerequisites

Before running the project, ensure you have:

- Node.js (v18 or above)
- npm
- AWS Account
- Amazon S3 Bucket
- AWS IAM User with S3 permissions
- AWS Access Key ID
- AWS Secret Access Key

---

## Installation

### Clone the repository

```bash
git clone https://github.com/anglinfemina07-byte/cloud-file-storage-system.git
```

### Navigate to the project directory

```bash
cd cloud-file-storage-system
```

### Install dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root and add:

```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=eu-north-1
S3_BUCKET_NAME=angelin-storage
PORT=3000
```

---

## Run the Application

Start the server using:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Upload File

**POST**

```
/upload
```

Uploads a selected file to the configured Amazon S3 bucket.

---

### Delete File

**DELETE**

```
/delete/:key
```

Deletes the specified file from the Amazon S3 bucket.

---

## Application Workflow

1. User selects a file from the web interface.
2. Multer temporarily stores the uploaded file.
3. Express receives the upload request.
4. AWS SDK uploads the file to Amazon S3.
5. A success response is returned to the user.
6. Users can delete uploaded files through the delete API.

---

## Future Enhancements

- User Authentication
- File Download Functionality
- File Preview
- Folder Management
- File Sharing via Secure Links
- Search and Filter Files
- Storage Usage Analytics
- Version Control for Files

---

## Author

**Angelin Femina**

GitHub: https://github.com/anglinfemina07-byte

---

## License

This project is licensed under the ISC License.
