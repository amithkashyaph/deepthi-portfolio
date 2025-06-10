import { useState } from "react";

type TruncatableTextProps = {
  text: string;
  maxLength?: number;
};

const TruncatableText = ({ text, maxLength = 150 }: TruncatableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const shouldTruncate = text.length > maxLength;

  const displayText =
    expanded || !shouldTruncate ? text : text.slice(0, maxLength) + "…";

  return (
    <div>
      <p className="text-base leading-7 text-white tracking-wide">
        {displayText}
      </p>

      {shouldTruncate && (
        <button
          onClick={toggleExpanded}
          className="text-blue-500 mt-2 underline hover:text-blue-700"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default TruncatableText;
