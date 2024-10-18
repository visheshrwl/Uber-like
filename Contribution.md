
# Contributing Guidelines  

This documentation contains a set of guidelines to help you during the contribution process.   
We are happy to welcome all contributions from anyone willing to improve or add new features to this repository.



## Prerequisites

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

---

## Setting Up the Project

Follow these steps to set up the project locally:

1. **Fork the repository**: Click on the `Fork` button at the top right of this repository.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/Uber-like.git
   ```
3. **Navigate to the project directory**:
   ```bash
   cd uber-like-app
   ```
4. **Create a new branch**: Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/my-new-feature
   ```
5. **Make your changes and commit them**. Follow the commit message guidelines below.

---

## Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/visheshrwl/Uber-like/blob/main/Code_Of_Conduct.md).

---

## Writing Commit Messages :memo:

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

---

## Issues

### Reporting Bugs

- Check if the issue is already reported in the [issues](https://github.com/visheshrwl/Uber-like/issues) section.
- If not, [open a new issue](https://github.com/visheshrwl/Uber-like/issues/new) with detailed steps to reproduce the bug.
- Be sure to include details such as the version of the project you are using, your operating system, and any relevant logs.

### Requesting Features

- To request a new feature, open an issue using the **Feature Request** template.
- Clearly describe the problem you want to solve and why it is essential.
- If possible, provide mockups or examples to illustrate the proposed feature.

---

## Pull Requests

### Steps to Submit a Pull Request

1. Ensure your branch is up to date with the `main` branch:
   ```bash
   git fetch origin
   git checkout main
   git merge origin/main
   ```
2. Push your feature branch:
   ```bash
   git push origin feature/my-new-feature
   ```
3. Open a pull request from your fork to the `main` branch of this repository.
4. In the pull request description:
   - Clearly describe the changes you have made.
   - Link to the issue you're addressing (if applicable).
   - Provide relevant screenshots or logs to demonstrate your changes.
5. Celebrate! 🎉 You have made a contribution.
6. Wait for your pull request to be reviewed and merged.

> NOTE: Please make sure to follow the [Code of conduct](https://github.com/visheshrwl/Uber-like/blob/main/Code_Of_Conduct.md) while contributing.

### Pull Request Guidelines

- Ensure the PR passes all tests.
- Be responsive to feedback from maintainers or reviewers.

---

## Commit Convention

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

---

## Using GitHub Desktop

1. **Open GitHub Desktop**:
   - Launch GitHub Desktop and log in to your GitHub account.
   
2. **Clone the Repository**:
   - Click "File" > "Clone Repository" to clone the repository locally.
   
3. **Switch to the Correct Branch**:
   - Ensure you're on the correct branch to submit a pull request.

4. **Make Changes**:
   - Make your changes using your preferred code editor.

5. **Commit Changes**:
   - Use GitHub Desktop to commit your changes with a descriptive message.

6. **Push Changes to GitHub**:
   - Push your changes to your forked repository.

7. **Create a Pull Request**:
   - Go to your fork on GitHub and open a pull request.

8. **Review and Submit**:
   - Review your changes, add additional details, and submit the pull request.

9. **Wait for Review**:
   - The project maintainers will review your pull request and may provide feedback.

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Need more help? 🤔  

Refer to these resources for additional help with Git and GitHub:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)  
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)  
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)  
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)  
- [Learn GitHub from Scratch](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLozRqGzj97d02YjR5JVqDwN2K0cAiT7VK)  



## Tip from us 😇

It always takes time to understand and learn. Don't worry, you’ve got this! 💪
```
