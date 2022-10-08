import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextContent } from "contentful";

interface RichTextProps {
  json: RichTextContent;
}
export default function RichText({ json }: RichTextProps) {
  return <>{documentToReactComponents(json as any)}</>;
}
