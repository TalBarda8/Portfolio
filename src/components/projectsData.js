import chessImage from "../pics/chessImage.png";
import weatherBoxImage from "../pics/weatherBoxImage.jpg";
import escapeRoomImage from "../pics/escapeRoomImage.png";
import codingWebAppImage from "../pics/codingWebAppImage.png";
import cocktailAppImage from "../pics/cocktailAppImage.png";
import bookShelfAppImage from "../pics/bookShelfAppImage.png";
import kitchefImage from "../pics/kitchefImage.jpeg";

const projects = [
    {
      title: "Kitchef",
      description: "I developted an IoT prototype project as part of the Milab program on computer-human interaction . Kitchef brings together wearable technology, IoT and parent-child cooking experiences.",
      skills: ["IoT", "C++", "Arduino", "Esp32", "Product Managment"],
      imageUrl: kitchefImage,
      liveUrl: "https://milabgroup42022.wixsite.com/kitchef",
      repoUrl: null,
    },
    {
      title: "Online Coding Web App",
      description: "Collaborative code editor that allows multiple users to interact in real-time. Built with React for the frontend and Express for the backend, it also leverages Socket.io to maintain real-time communication between clients and the server.",
      skills: ["Node.js", "Express.js", "React.js", "Socket.io", "Axios"],
      imageUrl: codingWebAppImage,
      liveUrl: "https://unrivaled-starburst-e93483.netlify.app/",
      repoUrl: "https://github.com/TalBarda8/online-coding-web-application",
    },
    {
      title: "VR Escape Room",
      description: "Escape room in virtual reality using Unity engine. The room involves Unity for 3D and virtual reality features using C#.",
      skills: ["Unity", "C#", "VR", "3D"],
      imageUrl: escapeRoomImage,
      liveUrl: null,
      repoUrl: "https://github.com/TalBarda8/VR-Escape-Room",
    },
    {
      title: "Random Cocktail Generator",
      description: "Present users with a random cocktail recipe with images and instructions, where each refresh of the page will result in a new cocktail being displayed. It is built on the Express/Node.js platform and utilizes Axios for HTTP requests to interact with the CocktailDB API.",
      skills: ["Node.js", "Express.js", "EJS", "API", "HTTP requests"],
      imageUrl: cocktailAppImage,
      liveUrl: null,
      repoUrl: "https://github.com/TalBarda8/Cocktails-Generator",
    },
    {
      title: "Book Shelf",
      description: "Web application designed to help book enthusiasts manage their personal library with ease. Users can add, edit, and delete books from their collection, as well as track their reading with notes and ratings.",
      skills: ["Node.js", "Express.js", "EJS", "Axios", "PostgreSQL"],
      imageUrl: bookShelfAppImage,
      liveUrl: null,
      repoUrl: "https://github.com/TalBarda8/Book-Shelf",
    },
    {
      title: "Checkers Windows App",
      description: "Checkers Windows desktop application. The project was built in C# using object-oriented programming and .NET WinForms, including forms and events.",
      skills: ["C#", ".NET", "WinForms"],
      imageUrl: chessImage,
      liveUrl: null,
      repoUrl: "https://github.com/TalBarda8/WindowsCheckers",
    },
    {
      title: "The Weather Box",
      description: "A device that retrieve the current weather conditions at a specified location by fetching the data from weather API, You can enter specific longitude and latitude and the device then displays a customized lights corresponding to the current weather condition.",
      skills: ["C++", "Arduino", "IoT"],
      imageUrl: weatherBoxImage,
      liveUrl: "https://www.youtube.com/watch?v=788kr_7DwH4&ab_channel=BarEfrima",
      repoUrl: "https://github.com/TalBarda8/TheWeatherBox",
    },
  ];
  
export default projects;
