// import PropTypes from 'prop-types';

// type Props = {
//     title: string;
//     imgSrc: string;
//     content: string;
//     author: string;
//   };

const BasicCard = ({ title, description, imageUrl}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
            <img className="w-full" src={imageUrl} alt="Sunset in the mountains"/>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {description?.length > 180 ? description.substring(0, 180) + "..." : description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
};

export default BasicCard;
