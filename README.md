# Paraline

Welcome to Paraline! This project utilizes the [Spatial Web Template](https://github.com/meta-quest/spatial-web-template) to build a `Curvespace` for persistent location-based AR experience.

## Features

- 🚀 Multi-person online collaborative creation
- 🌐 Persistent location-based AR experience

## Getting Started

Follow these instructions to set up your own curvespace.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v16.x or later recommended)
- npm (v9.x or later recommended)

### Installation

1. Clone the repository and navigate to the project directory:

```sh
$ git clone git@github.com:curvespaces/paraline.git
$ cd paraline
```

2. Install the dependencies:

```sh
$ npm install
```

3. Run the development server:

```sh
$ npm run serve
```

The app will be available at https://localhost:8081/ in your browser.

### Building for Production

> This project contains GitHub workflow [configuration](https://github.com/meta-quest/spatial-web-template/blob/main/.github/workflows/deploy.yml) that automatically builds and deploys the app to GitHub page.

To manually build the app for production, run the following command:

```sh
$ npm run build
```

This will generate a dist folder with the optimized files for deployment.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
