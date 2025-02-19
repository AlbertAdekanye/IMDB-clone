export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>

      <p>
        This is a clone of the IMDB website. It was created using Next.js, Tailwind CSS, and the TMDB API. 
        The purpose of this project was to practice my skills with Next.js and Tailwind CSS. 
        I also wanted to learn how to use the TMDB API. The website is fully responsive and has a dark mode feature. 
        The website is hosted on Vercel.
      </p>

      <p>
        The data on the website is fetched from the TMDB API, which provides up-to-date information about movies, TV shows, and actors. The website uses server-side rendering to ensure fast load times and a smooth user experience. Additionally, the website includes features such as pagination, filtering, and sorting to help users find the information they are looking for quickly and easily. The website also includes a search bar that allows users to search for movies, TV shows, and actors by name. Overall, this project was a great learning experience and helped me improve my skills in web development.
      </p>

      <p>
        The website is fully responsive and has a dark mode feature. The dark mode feature allows users to switch between light and dark themes, making it easier to view the website in low-light conditions. The website is hosted on Vercel, which provides fast and reliable hosting for Next.js applications. Overall, this project was a great learning experience and helped me improve my skills in web development. I look forward to working on more projects like this in the future.
      </p>

      <p>
        In addition to the website, I also created a GitHub repository for the project, which contains all of the source code and documentation. The repository is public and can be accessed by anyone who is interested in learning more about the project. I hope that this project will inspire others to create their own websites and explore the world of web development. Thank you for visiting the website, and I hope you enjoy your time here!
      </p>

      <p className="text-2xl font-medium text-amber-600 text-center"> 
        <a href="https://github.com/AlbertAdekanye/IMDB-clone" className="text-2xl font-bold text-amber-600">
          GitHub Repository
        </a>
      </p>
    </div>
  );
}
