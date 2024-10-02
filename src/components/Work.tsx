export interface WorkProps {
  title: string;
  imagePath: string;
  description: string;
  url: string;
}

export function Work({ title, imagePath, description, url }: WorkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col md:flex-row mb-6 bg-gray-800 p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
    >
      <img
        src={imagePath}
        alt={title}
        className="w-full md:w-80 h-auto rounded-lg shadow-lg mb-2 md:mb-0 aspect-auto"
      />
      <div className="ml-0 md:ml-4 text-gray-300">
        <h2 className="text-2xl  mb-2 text-white">{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
