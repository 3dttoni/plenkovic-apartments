import { IReviews } from "@m/shared";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from "@mui/material";
import Image from "next/image";

interface ReviewsProps {
  reviews: IReviews[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <List sx={{m:0}}>
      {reviews.map(({ personName, personPhoto, rate, review }) => (
        <ListItem key={personName} disableGutters>
          <ListItemAvatar>
            <Avatar
              sizes="large"
              src={personPhoto.url}
              alt={personPhoto.title}
              sx={{ width: 56, height: 56, mr: 1 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={personName}
            secondary={
              <>
                <div>
                  <Rating size="small" precision={0.5} defaultValue={rate} />
                </div>
                {review}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
