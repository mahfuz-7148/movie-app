import Trending from '../assets/icons/trending.svg';
import NewRelease from '../assets/icons/newRelease.svg';
import ComingSoon from '../assets/icons/commingSoon.svg';
import Favourite from '../assets/icons/favourite.svg';
import WatchLater from '../assets/icons/watchLater.svg';

export const Sidebar = () => {
  return (
    <aside className="h-full bg-white dark:bg-linear-to-b from-gray-900 to-gray-950 p-4">
      <ul className="space-y-1.5">
        <li>
          <a
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-xl bg-linear-to-r from-primary to-yellow-400 text-black font-semibold shadow-lg shadow-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/60 hover:scale-105"
            href="#"
          >
            <img
              src={Trending}
              width="24"
              height="24"
              alt=""
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white hover:translate-x-1 hover:shadow-md"
            href="#"
          >
            <img
              src={NewRelease}
              width="24"
              height="24"
              alt=""
              className="transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <span className="font-medium">New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white hover:translate-x-1 hover:shadow-md"
            href="#"
          >
            <img
              src={ComingSoon}
              width="24"
              height="24"
              alt=""
              className="transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <span className="font-medium">Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white hover:translate-x-1 hover:shadow-md"
            href="#"
          >
            <img
              src={Favourite}
              width="24"
              height="24"
              alt=""
              className="transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <span className="font-medium">Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center space-x-3 px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white hover:translate-x-1 hover:shadow-md"
            href="#"
          >
            <img
              src={WatchLater}
              width="24"
              height="24"
              alt=""
              className="transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <span className="font-medium">Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}