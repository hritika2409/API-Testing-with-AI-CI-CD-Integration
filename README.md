# API Testing with AI CI/CD Integration

This project demonstrates a modern approach to API testing by integrating **Keploy's AI-powered testing capabilities** with a **GitHub Actions CI/CD pipeline**. It features a simple Book API that showcases automated test generation, execution, and continuous integration practices.

## 🌟 Key Features

- **AI-Powered Test Generation**: Automatically generates comprehensive test cases using Keploy
- **Zero Manual Test Writing**: Record API interactions and generate tests instantly
- **CI/CD Integration**: Seamless integration with GitHub Actions for automated testing
- **High Test Coverage**: Achieve 100% API coverage with minimal effort
- **Mock Generation**: Automatic creation of mocks and stubs for dependencies
- **OpenAPI Specification**: Well-documented API endpoints with OpenAPI 3.0

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Developer     │    │   Book API       │    │   Keploy AI     │
│   Interaction   │───▶│   Application    │───▶│   Testing       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                         │
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   GitHub         │    │   Auto-generated│
                       │   Repository     │    │   Test Cases    │
                       └──────────────────┘    └─────────────────┘
                                │                         │
                                ▼                         ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   GitHub Actions │    │   Test Results  │
                       │   CI/CD Pipeline │───▶│   & Reports     │
                       └──────────────────┘    └─────────────────┘
```

## 📚 API Endpoints

The Book API provides the following endpoints:

### GET /books
- **Description**: Retrieve all books
- **Response**: Array of book objects
- **Status Code**: 200 OK

### POST /books
- **Description**: Add a new book to the collection
- **Request Body**: 
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "isbn": "978-1234567890"
  }
  ```
- **Response**: Created book object
- **Status Code**: 201 Created

For detailed API documentation, see the [OpenAPI specification](openapi.yaml).

## 🛠️ Technology Stack

- **Backend**: Node.js/Express.js (or your preferred framework)
- **Testing**: Keploy AI Testing Platform
- **CI/CD**: GitHub Actions
- **Documentation**: OpenAPI 3.0
- **Language**: JavaScript/TypeScript

## 🔧 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Keploy CLI installed
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hritika2409/API-Testing-with-AI-CI-CD-Integration.git
   cd API-Testing-with-AI-CI-CD-Integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Keploy**
   ```bash
   curl --silent -O -L https://keploy.io/install.sh && source install.sh
   ```

### Running the Application

1. **Start the API server**
   ```bash
   npm start
   ```

2. **Record API interactions with Keploy**
   ```bash
   keploy record -c "npm start"
   ```

3. **Make API calls to generate test cases**
   ```bash
   # Get all books
   curl -X GET http://localhost:3000/books
   
   # Add a new book
   curl -X POST http://localhost:3000/books \
     -H "Content-Type: application/json" \
     -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","isbn":"978-0743273565"}'
   ```

4. **Run tests with Keploy**
   ```bash
   keploy test -c "npm start" --delay 10
   ```

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. **Triggers on**: Push to main branch and pull requests
2. **Sets up environment**: Node.js, dependencies, and Keploy
3. **Runs the application**: Starts the API server
4. **Executes tests**: Runs Keploy-generated tests
5. **Reports results**: Provides test coverage and results

### Workflow Configuration

The CI/CD pipeline is configured in [`.github/workflows/keploy-ci.yml`](.github/workflows/keploy-ci.yml):

```yaml
name: Keploy CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Install Keploy
        run: curl --silent -O -L https://keploy.io/install.sh && source install.sh
      - name: Run Keploy Tests
        run: keploy test -c "npm start" --delay 10
```

## 📊 Test Results

Replace the placeholder below with your actual test results screenshot:

![Test Results](book.png)

*Screenshot showing successful test execution with coverage metrics*

## 🎯 Benefits of This Approach

### Traditional Testing vs AI-Powered Testing

| Aspect | Traditional Testing | Keploy AI Testing |
|--------|-------------------|-------------------|
| **Setup Time** | Hours/Days | Minutes |
| **Test Coverage** | Manual effort required | 100% automatic |
| **Maintenance** | High maintenance overhead | Self-updating tests |
| **Mock Generation** | Manual mock creation | Automatic dependency mocking |
| **CI/CD Integration** | Complex setup | Simple integration |

### Key Benefits

- **⚡ Speed**: Generate comprehensive test suites in minutes
- **🎯 Accuracy**: AI-powered test generation ensures realistic scenarios
- **🔄 Automation**: Seamless CI/CD integration with automated testing
- **📈 Coverage**: Achieve high test coverage without manual effort
- **🛡️ Reliability**: Consistent test execution across environments
- **💰 Cost-Effective**: Reduce testing time and resources significantly

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Resources

- **Keploy Documentation**: [https://docs.keploy.io](https://docs.keploy.io)
- **GitHub Actions**: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- **OpenAPI Specification**: [https://swagger.io/specification/](https://swagger.io/specification/)

## 🏆 Acknowledgments

- [Keploy](https://keploy.io) for providing the AI-powered testing platform
- The open-source community for continuous inspiration and support
- GitHub for providing excellent CI/CD capabilities through Actions

---

**Made with ❤️ by [Hritika](https://github.com/hritika2409)**

*Transforming API testing from manual drudgery to AI-powered efficiency!*
