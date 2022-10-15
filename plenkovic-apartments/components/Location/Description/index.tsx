import RichText from "@c/RichText";
import { Card, CardContent } from "@mui/material";
import { RichTextContent } from "contentful";

interface LocationDescriptionProps {
  description: RichTextContent;
}
export default function LocationDescription({
  description,
}: LocationDescriptionProps) {
  return (
    <Card elevation={5}>
      <CardContent>
        <RichText json={description} />
      </CardContent>
    </Card>
  );
}
