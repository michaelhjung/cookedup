/* eslint-disable react/self-closing-comp */

const EllipsisLoader = () => (
  <div
    className="my-5 flex justify-center"
    id="ellipsis-container"
  >
    <div
      className="flex w-12 justify-between"
      id="ellipsis-animation"
    >
      <span
        className="inline-block size-2 animate-bounce-higher rounded-full border border-gray-400 bg-white"
        style={{ animationDelay: "0s" }}
      ></span>
      <span
        className="inline-block size-2 animate-bounce-higher rounded-full border border-gray-400 bg-white"
        style={{ animationDelay: "0.2s" }}
      ></span>
      <span
        className="inline-block size-2 animate-bounce-higher rounded-full border border-gray-400 bg-white"
        style={{ animationDelay: "0.4s" }}
      ></span>
    </div>
  </div>
);

export default EllipsisLoader;
