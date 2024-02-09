import { FiCheckCircle } from 'react-icons/fi';

const InfoCard = ({ title, description, iconColor, imageUrl }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
        <FiCheckCircle size={24} color={iconColor} />
        <h3 className="mt-2 text-lg font-semibold text-center sm:text-left">{title}</h3>
        <p className="mt-2 text-gray-300 text-center sm:text-left">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
