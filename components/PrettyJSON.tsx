import React, { FC } from "react";

interface PrettyJSONProps {
  data: any;
}
export const PrettyJSON: FC<PrettyJSONProps> = ({ data }) => {
  const jsonString = JSON.stringify(data, null, 2);

  const syntaxHighlight = (json: any) => {
    if (!json || typeof json !== "string") {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json?.replace(/(&|<|>|"|'|\n|\r)/g, function (match: any) {
      const escapeMap: any = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "\n": "<br>",
        "\r": "",
      };
      return escapeMap[match] || match;
    });

    return json?.replace(
      /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(\.\d*)?([eE][+-]?\d+)?)/g,
      (match: any) => {
        let cls = "text-amber-400"; // Default class for numbers
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-purple-400"; // Key color
          } else {
            cls = "text-blue-400"; // String color
          }
        } else if (/true|false/.test(match)) {
          cls = "text-red-400"; // Boolean color
        } else if (/null/.test(match)) {
          cls = "text-cyan-400"; // Null color
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  };

  return (
    <pre
      className="bg-gray-900 text-white p-5 rounded-lg overflow-x-auto font-mono"
      dangerouslySetInnerHTML={{ __html: syntaxHighlight(jsonString) }}
    />
  );
};
