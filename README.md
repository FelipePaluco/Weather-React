## Getting Started

Clone this repository on your local machine, then create a .env file on the root of the cloned repository.

Insert this on .env file:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'AIzaSyDHQ0vUkDG0hyUrpkiqseAzI4YLOB3GYhE'
NEXT_PUBLIC_OPEN_WEATHER_API_KEY = '8906ba17b3e1cd2fb9d46ac9dce1fc44'
```

After it, run

```
npm ci
```

Now you are ready to go! You may want to choose of the options below to start the application.

### Development Server

To run the development server, run:

```bash
npm run dev
```


### Building
To build the application, run:

```bash
npm run build
```

To start the built bundle pack, run:

```bash
npm run start
```

### Opening the application
After installing the dependencies and having .env created, you can run some of the provided commands above and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker
The project contains a NextJS dockerfile, which means that you can run the application inside of a docker container, to do this follow these steps:

1. Install Docker on your machine
2. Clone this repository
3. Build your container: `docker build -t weatherapp-docker` 
4. Run your container: `docker run -p 3000:3000 weatherapp-docker`

## Bonus

### Lint

```
npm run lint
```

### Formatting

```
npm run prettier
```

## Preview
![Screenshot 2024-05-19 at 15 17 24](https://github.com/FelipePaluco/Weather-React/assets/87909998/f493c806-3287-4b1c-b982-2d64a7bd4cb5)


