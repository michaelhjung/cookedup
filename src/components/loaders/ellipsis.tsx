/* eslint-disable react/self-closing-comp */

const EllipsisLoader = () => (
  <div
    className="flex justify-center my-5"
    id="ellipsis-container"
  >
    <div
      className="flex justify-between w-12"
      id="ellipsis-animation"
    >
      <span
        className="w-2 h-2 inline-block border border-gray-400 bg-white rounded-full animate-bounce-higher"
        style={{ animationDelay: "0s" }}
      ></span>
      <span
        className="w-2 h-2 inline-block border border-gray-400 bg-white rounded-full animate-bounce-higher"
        style={{ animationDelay: "0.2s" }}
      ></span>
      <span
        className="w-2 h-2 inline-block border border-gray-400 bg-white rounded-full animate-bounce-higher"
        style={{ animationDelay: "0.4s" }}
      ></span>
    </div>
  </div>
);

export default EllipsisLoader;
