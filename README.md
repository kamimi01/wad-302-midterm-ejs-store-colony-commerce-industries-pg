# Midterm Project Instructions: Building an E-Commerce Website

## Get Started

1. Execute `npm run setup` to install all dependencies and setup husky.
2. Execute `npm run dev` to start to compile TypeScript and SASS, and launch a browser.
3. Make sure you can see the following screen. If not, please reload just in case.

![](./doc/sample-image.png)

## How to preview OpenAPI

OpenAPI is a standard specification of API.

1. Install [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) extension on VSCode
2. Open `open.yaml` in doc folder
3. Open Command Palette (In case of Macbook, Shift + Command + P)
4. Type `Preview Swagger` and select it.
5. Make sure that you can see the preview of OpenAPI like the following.

![](./doc/swagger-preview.png)

---

How to Proceed this project is the following.

## Objective
To design and implement a basic e-commerce website using Express, EJS, and TypeScript. The project should include functionalities for browsing products, adding products to a shopping cart, checking out, and user authentication. Server-side rendering should be used to render views. While it is not mandatory to use client-side DOM manipulation, you are welcome to do so if you wish.

## Demo
> It is just for you to reference, your final outcome should not be impacted by this. 
<div>
    <a href="https://www.loom.com/share/27d1ddc4ec3d4b408294d492c3572874">
      <p>E-commerce - 14 July 2024 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/27d1ddc4ec3d4b408294d492c3572874">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/27d1ddc4ec3d4b408294d492c3572874-with-play.gif">
    </a>
  </div>



## Requirements
1. **Technology Stack**:
   - **Backend**: Node.js, Express.js
   - **Frontend**: EJS (Embedded JavaScript templates)
   - **Language**: TypeScript
   - **Database**: in-memory storage for simplicity.

2. **Project Structure**:
   - **Models**: Define the data structures (e.g., Product, User, Cart, and etc).
   - **Views**: Create EJS templates for rendering the frontend.
   - **Controllers**: Handle the logic for processing requests and returning responses.
   - **Routes**: Define the endpoints for various functionalities.

3. **Responsiveness**:
   - Ensure that the website is responsive and works well on different screen sizes and devices, including mobile phones, and desktops
   - Use CSS media queries to adjust the layout and design for different screen sizes
   - Test the website on the browser `Chrome`

### Group Formation
- **Team Size**: 4 members per group.
- **Collaboration**: Use version control (e.g., GitHub) to manage the codebase collaboratively.

### Features
1. **User Authentication**:
   - Implement user registration and login functionality.
   - Secure routes that require authentication.
   - Personalize the user experience based on the logged-in user.

2. **Product Listing**:
   - Display a list of products with details like name, price, and description.
   - Each product should have a unique ID.

3. **Product Detail**:
   - Display detailed information about a selected product.
   - Include an option to add the product to the shopping cart.

4. **Shopping Cart**:
   - Allow users to add products to their cart.
   - Display the items in the cart with quantities and total price.
   - Provide options to update quantities or remove items.

5. **Checkout Process**:
   - Implement a simple checkout process where users can review their cart and place an order.
   - Capture user details for the order (e.g., name, address).

6. **Order Confirmation**:
   - Display a confirmation message after an order is placed.

### Instructions
1. **Setup**:
   - Initialize a new Node.js project using `npm init`.
   - Install necessary packages: `express`, `ejs`, `typescript`, and others as needed (`@types/express`, `ts-node-dev`, etc.).
   - Set up the TypeScript configuration (`tsconfig.json`).

2. **Project Structure**:
   - Create a directory structure as follows:
     ```plaintext
     /root
     ├── /src
     │   ├── /controllers
     │   ├── /models
     │   ├── /routes
     │   ├── /views
     │   ├── app.ts
     │   ├── ...
     ├── package.json
     ├── tsconfig.json
     ├── README.md
     └── ...
     
     ```
   - **Controllers**: Create controllers for handling requests.
   - **Models**: Define TypeScript interfaces or classes for `Product`, `User`, `Cart`, as needed.
   - **Routes**: Set up routes for products, cart, authentication, as needed.
   - **Views**: Create EJS templates for rendering the frontend.

3. **Implementation**:
   - **User Authentication**:
     - Create registration and login forms.
     - Implement registration and login functionality.
     - Use sessions(cookies) for maintaining user authentication state.
     - Ensure authenticated state is checked server-side and reflected in the views.
   - **Product Listing and Detail**:
     - Create a product model.
     - Implement logic to get and display products.
     - Create views for listing products and displaying product details.
     - Render product data server-side using EJS.
   - **Shopping Cart**:
     - Create a shopping cart model.
     - Implement logic to add, remove, and update items in the cart.
     - Create views for displaying the cart.
     - Render cart data server-side using EJS.
   - **Checkout Process**:
     - Create an order model.
     - Implement logic for placing an order.
     - Create a checkout view.
     - Render checkout data server-side using EJS.
   - **Order Confirmation**:
     - Implement logic to confirm an order.
     - Create an order confirmation view.
     - Render order confirmation data server-side using EJS.
   - **Additional Features**: (Optional)
     - Product search functionality.
     - Admin panel for managing products.
     - Admin panel for viewing orders report.

4. **Submission**:
   - Please make sure the final working code merged to `main` branch.
   - Include a README.md file with instructions on how to set up and run your project.

### Evaluation Criteria
- **Functionality**: How well the features are implemented and work together.
- **Code Quality**: Adherence to best practices and code organization.
- **Design**: User interface and user experience.
- **Documentation**: Clarity and completeness of the README and comments in the code.
- **Presentation**: Effectiveness and clarity of the presentation.
- and more...

### Presentation Instructions - Reference Only, you can always make it more interesting
1. **Presentation Format**:
   - Each group will present their project in a 15-minute presentation.
   - Use slides to support your presentation (e.g., Google Slides, PowerPoint).

2. **Content**:
   - **Introduction**: Introduce your team and provide an overview of the project.
   - **Features**: Demonstrate the key features of your e-commerce website.
   - **Technical Details**: Explain the architecture, key technologies used, and any challenges faced.
   - **Live Demo**: Show a live demo of your application, highlighting the main functionalities.
   - **Conclusion**: Summarize the project and discuss any future improvements or additional features.

3. **Q&A**:
   - Be prepared to answer questions from the audience and the instructor.

### Deadline
- The project must be submitted by July 22nd.

### Potential Guest to the presentation day
- Grayce, Career Development Specialist may be with us while you are presenting this project. 
- This opportunity may help her to understand better about you for your future job hunting.

## User stories

- General explanation of software features from the perspective of a user
- focuses on delivering value to the user

> **Example**

**As a** authenticated user,
**I want to** be able to re-order products based on my purchase history
**so that I** do not have to search products again.

## MVP (Minimum Viable Product)

- Product with just enough features to satisfy early customers
- Decide which features will be part of the MVP.
- Keep as simple as possible
- Get feedback and continue development

## Wireframes

- Low-fidelity,
- Simple sketches of the user interface without graphics or colours.
- Plan the layout and prioritize content and functionalities.

## Mock Design

> You came to this program to learn how to be a developer, not a designer. However, it is important to have a good design. You can use a tool like Figma to create your design.

- Hi-fidelity
- Websites for inspiration:
  - [Dribbble](https://dribbble.com/)
  - [Behance](https://www.behance.net/)
  - [Pinterest](https://www.pinterest.ca/)
  - [Awwwards](https://www.awwwards.com/)
  - [CSS Design Awards](https://www.cssdesignawards.com/)

**Cool idea:** Try to talk to UI/UX students and ask some advices for your product design.

## Project management

- Use a project management tool like GitHub Projects.
- Create a board for your project
- Add tasks/issues based on your user stories
- Allocate tasks to team members
- Estimate tasks and set due dates (it is ok to change them later)

## Communication

- Use a communication tool like Slack.
- Create a chatroom for your project
- Add team members
- Invite your instructor to the chatroom
- Use the channel to communicate
- Daily standup
  - What did you do yesterday?
  - What are you going to do today?
  - Do you have any blockers?

## Please keep in mind!!

- if something fails in your team, it is not one of your team members' failures but a WHOLE TEAM.
- if you do not want to lead, follow the lead
- Decide as a team
- Be responsive - no longer than half a day
- Please flag if you think you are behind
- If you are stuck on a problem for more than 1 hour, It is time to ask for help
- Take action instead of thinking too long

Good luck! If you have any questions, feel free to reach out to your instructor.
# wad-302-midterm-ejs-store-colony-commerce-industries-pg
