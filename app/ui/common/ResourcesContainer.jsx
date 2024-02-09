import { FiDownload } from 'react-icons/fi';

const ResourcesContainer = ({ title, description }) => {
  return (
    <div className="bg-gray-200 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <div className="flex justify-center">
          <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
            <FiDownload className="mr-2" />
            <span>Download Brochures</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesContainer;
