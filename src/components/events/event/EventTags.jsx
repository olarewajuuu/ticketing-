const tags = ["Conference", "Lagos events", "Nigeria events", "Global", "Blockchain", "Technology"];

const EventTags = () => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold">Tags</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm inline-block w-fit">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventTags;
