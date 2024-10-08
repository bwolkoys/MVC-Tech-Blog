## Description

This is a CMS-stylr blog. It allows developers to post blogs and comment on other developer's posts. This application can create a community for developer's to learn new technologies, concepts, advancements, and more. Instead of a google search, you can use this application for many offerings. 

## User Story

- AS A developer who writes about tech
- I WANT a CMS-style blog site
- SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
- THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Installation

Packages to Install:
- express-handlebars package
- pg
- sequelize
- dotenv package
- bcrypt package
- express-session and connect-session-sequelize packages

## Usage

- Here is a link to the site: https://mvc-tech-blog-ozef.onrender.com/ From there, sign up for an account and create your first post. The style of the site and login are currently still in works. 

## Resources
- for server.js: copied from Module 14, Activity 28 (mini project)
- for connection.js: taken from Module 14, Activity 23-Ins_Auth-Review
- sequelize documentation: https://sequelize.org/docs/v6/other-topics/naming-strategies/ 
- associations for index.js in models folder: https://sequelize.org/docs/v6/core-concepts/assocs/ 
- hooks in user.js- https://sequelize.org/docs/v6/other-topics/hooks/ 
- spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
- handlebars documentation: https://handlebarsjs.com/guide/#what-is-handlebars 

## Screenshot

![Screenshot 2024-10-07 at 12 14 19 PM](https://github.com/user-attachments/assets/42262648-1276-4df7-8bec-59c66546953b)

![Screenshot 2024-10-07 at 12 37 48 PM](https://github.com/user-attachments/assets/adc9cc97-a576-4ce7-bb8b-27928a49a545)
