# Contributing Guidelines 🎯

This documentation contains a set of guidelines to help you during the contribution process.   
We are happy to welcome all contributions from anyone willing to improve or add new features to this repository.

<br>

# Code of Conduct 📃

Please read and follow our [Code of Conduct.](https://github.com/visheshrwl/Uber-like/blob/main/Code_Of_Conduct.md)

<br>

# <h1 align="center">Star our Repository ⭐</h1>

### <div align = "center" style = "display:flex; justify-content:space-evenly; gap:100px;" > [![Stars](https://img.shields.io/github/stars/visheshrwl/Uber-like?style=for-the-badge&logo=github)](https://github.com/visheshrwl/Uber-like/stargazers) [![Forks](https://img.shields.io/github/forks/visheshrwl/Uber-like?style=for-the-badge&logo=github)](https://github.com/visheshrwl/Uber-like/network/members) [![Issues](https://img.shields.io/github/issues/visheshrwl/Uber-like?style=for-the-badge&logo=github)](https://github.com/visheshrwl/Uber-like/issues) [![PRs Open](https://img.shields.io/github/issues-pr/visheshrwl/Uber-like?style=for-the-badge&logo=github)](https://github.com/visheshrwl/Uber-like/pulls) [![PRs Closed](https://img.shields.io/github/issues-pr-closed/visheshrwl/Uber-like?style=for-the-badge&logo=github&color=2cbe4e)](https://github.com/visheshrwl/Uber-like/pulls?q=is%3Apr+is%3Aclosed)</div>

<br> 

# Need Help With The Basics? 🤔

If you're new to Git and GitHub, no worries! Here are some useful resources:

- [Forking a Repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repository](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to Create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting Started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

# Project Structure 📂

```bash
UBER-LIKE/
├── .github/                  # GitHub-related configurations such as workflows, issue templates, etc
│   
├── backend/                  # All the backend file components are included here
│   
├── frontend/                 # All the frontend file components are included here
│   
├── kubernetes/               # All the .yml files are included here
│     
├── .env.example               
│   
├── .gitignore  
│   
├── Code_Of_Conduct.md        # Some rules for the contributors
│   
├── Contribution.md           # Instructions for the contributors
│   
├── docker-compose.yml        
│   
├── LICENSE                   # A permission to do something
│   
├── package-lock.json
├── 
├── package.json          
├── 
├── Readme.md                 # Some instructions related to the project
```

<br>

# Prerequisites ✍️

Before getting started, ensure you have the following tools installed:

- **Docker**
- **Kubernetes**
- **GitHub account**
- **DockerHub account**
- **Node.js** (version >= 14.x)
- **npm** (version >= 6.x)

You can check if Node.js and npm are installed by running:

```bash
node -v
npm -v
```

<br>

# Setting Up the Project ✨

1. **Star this repository**
    Click on the top right corner marked as **Stars** at last.

2. **Fork this repository**
    Click on the top right corner marked as **Fork** at second last.

3. **Clone the forked repository**

```bash
git clone https://github.com/<your-github-username>/Uber-like.git
```
  
4. **Navigate to the project directory**

```bash
cd Uber-like
```

5. **Create a new branch**

```bash
git checkout -b <your_branch_name>
```

6. **To make changes**

```bash
git add .
```

7. **Now to commit**

```bash
git commit -m "add comment according to your changes or addition of features inside this"
```

8. **Push your local commits to the remote repository**

```bash
git push -u origin <your_branch_name>
```

9. **Create a Pull Request**

10. **Congratulations! 🎉 you've made your contribution**

<br>

# Alternatively, contribute using GitHub Desktop 🖥️

1. **Open GitHub Desktop:**
  Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
- If you haven't cloned the project repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
- Choose the project repository from the list of repositories on GitHub and clone it to your local machine.

3.**Switch to the Correct Branch:**
- Ensure you are on the branch that you want to submit a pull request for.
- If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
- Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
- In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
- Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
- After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
- Go to the GitHub website and navigate to your fork of the project repository.
- You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
- On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
- Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the project repository.

<br>

# For Help And Support 💬

- Admin Github Profile:- [Vishesh Rawal](https://github.com/visheshrwl)
- Contact :- [LinkedIn](https://linkedin.com/in/visheshrawal)

<br>

# Good Coding Practices 🧑‍💻

1. **Follow the Project's Code Style**

   - Maintain consistency with the existing code style (indentation, spacing, comments).
   - Use meaningful and descriptive names for variables, functions, and classes.
   - Keep functions short and focused on a single task.
   - Avoid hardcoding values; instead, use constants or configuration files when possible.

2. **Write Clear and Concise Comments**

   - Use comments to explain why you did something, not just what you did.
   - Avoid unnecessary comments that state the obvious.
   - Document complex logic and functions with brief explanations to help others understand your thought -process.

3. **Keep Code DRY (Don't Repeat Yourself)**

   - Avoid duplicating code. Reuse functions, methods, and components whenever possible.
   - If you find yourself copying and pasting code, consider creating a new function or component.

4. **Write Tests**

   - Write unit tests for your functions and components.
   - Ensure your tests cover both expected outcomes and edge cases.
   - Run tests locally before making a pull request to make sure your changes don’t introduce new bugs.

5. **Code Reviews and Feedback**

   - Be open to receiving constructive feedback from other contributors.
   - Conduct code reviews for others and provide meaningful suggestions to improve the code.
   - Always refactor your code based on feedback to meet the project's standards.

<br>

# Writing Commit Messages 🪧

Please [write a great commit message](https://chris.beams.io/posts/git-commit/).

1. Separate subject from body with a blank line.
2. Limit the subject line to 50 characters.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the imperative mood in the subject line (example: "Fix networking issue").
6. Wrap the body at about 72 characters.
7. Use the body to explain **why**, not what and how (the code shows that!).

**Example:**

```
[TAG] Short summary of changes in 50 chars or less

Add a more detailed explanation here, if necessary. Possibly give 
some background about the issue being fixed, etc. The body of the 
commit message can be several paragraphs. 

Resolves: #123
See also: #456, #789
```

<br>

# Pull Request Process 🚀

When submitting a pull request, please adhere to the following:

1. **Self-review your code** before submission. 😀
2. Include a detailed description of the functionality you’ve added or modified.
3. Comment your code, especially in complex sections, to aid understanding.
4. Add relevant screenshots to assist in the review process.
5. Submit your PR using the provided template and hang tight; we'll review it as soon as possible! 🚀

<br>

# Pull Request Guidelines 🗃️

- Ensure the PR passes all tests.
- Be responsive to feedback from maintainers or reviewers.

<br>

# Issue Report Process 📌

- Check if the issue is already reported in the [issues](https://github.com/visheshrwl/Uber-like/issues) section.
- If not, [open a new issue](https://github.com/visheshrwl/Uber-like/issues/new) with detailed steps to reproduce the bug.
- Be sure to include details such as the version of the project you are using, your operating system, and any relevant logs.

<br>

# Requesting Features 🏷️

- To request a new feature, open an issue using the **Feature Request** template.
- Clearly describe the problem you want to solve and why it is essential.
- If possible, provide mockups or examples to illustrate the proposed feature.

<br>

# Commit Convention 🔨
  
When you create a commit, follow this convention:  
`category(scope or module): message`  
Use one of the following categories:

- **feat / feature**: New code or features.
- **fix**: Bug fixes (mention the issue if present).
- **refactor**: Code-related changes that are not fixes or new features.
- **docs**: Documentation changes (e.g., README updates).
- **build**: Build or dependency changes.
- **test**: Changes to test code.
- **ci**: Continuous integration configuration changes.
- **chore**: Miscellaneous changes that don't fit into the above categories.

Example:  
```bash
feat(components): add new prop to the avatar component
```

<br>

# License 🗝️

By contributing, you agree that your contributions will be licensed under the MIT License.

## Tip from us 😇

It always takes time to understand and learn. Don't worry, you’ve got this! 💪

# Thank you for contributing 💗

We truly appreciate your time and effort to help improve our project. Feel free to reach out if you have any questions or need guidance. Happy coding! 🚀

##