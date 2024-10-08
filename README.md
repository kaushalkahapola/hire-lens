# [HireLens](https://www.hire-lens-flame.vercel.app)

![image](https://github.com/user-attachments/assets/0a3c17b1-d4b8-459c-a9a0-3ffd034128f9)


Welcome to HireLens, a web application designed to streamline the recruitment process by allowing users to upload resumes and job descriptions. The application scores resumes against job requirements, making it easier for hiring managers to find the best candidates.

## Features

- Upload resumes in PDF format.
- Enter job title, skills, and descriptions.
- Receive a score indicating how well the resume matches the job description.

![image](https://github.com/user-attachments/assets/64095681-c965-4f8b-a227-0017a6df83f9)


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.x
- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/kaushalkahapola/hire-lens.git
   ```

2. Install the required packages:

   ```
   npm install
   ```
3. create .env file
   
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000 
   ```
4. [Setup the backend](https://github.com/kaushalkahapola/automated-resume-screening)

5. Run the web application:

   ```
   npm run dev
   ```
   or
   ```
   npm run build
   npm start
   ```


## Usage

1. Open your browser and go to `http://localhost:3000` to access the application.
2. Fill in the job title, skills, and job description.
3. Upload the resume(s) in PDF format.
4. Click the submit button to receive a score for the uploaded resume(s).

## Future Improvements

* Mobile Responsiveness: Enhance the UI for better mobile compatibility.
* Advanced Analytics: Implement more detailed analysis and reporting features.
* User Authentication: Add user authentication and profile management.

## Deployment

This application is designed to be deployed on platforms like Vercel. Refer to the respective documentation for deployment instructions.

### Vercel Deployment

To deploy the Next.js application on Vercel, follow these steps:

1. Create a Vercel account.
2. Import your Next.js project from GitHub.
3. Follow the prompts to configure and deploy your application.


## Acknowledgments

- UI Credits - This application utilizes Mantine UI for its component library, providing a modern and responsive user interface.
- Special thanks to the FastAPI and Next.js communities for their excellent documentation and support.
