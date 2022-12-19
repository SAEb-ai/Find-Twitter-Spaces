import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { UserContext } from "../../App";
import useStyles from "./SearchResults.style";

export default function SearchResults() {
  const classes = useStyles();
  const { topic } = useContext(UserContext);
  const [spaces, setSpaces] = useState([]);
  const getTwitterSpaces = async () => {
    if (topic != null) {
      const results = await axios.get(`/filter/${topic}`);
      setSpaces(results.data.data);
    }
  };
  useEffect(() => {
    getTwitterSpaces();
  }, [topic]);

  return (
    <>
      <div className={classes.displaySpaces}>
        {spaces
          ? spaces.map((space) => {
              const visitTwitterSpaceUrl = `https://twitter.com/i/spaces/${space.id}`;
              const startTime = space.scheduled_start;
              return (
                <Card key={space.id} className={classes.dimensionsCard}>
                  <CardActionArea href={visitTwitterSpaceUrl} target="_blank">
                    <CardContent className={classes.designCard}>
                      <Typography gutterBottom variant="h5" className={classes.designTitleCard}>
                        {space.title}
                      </Typography>
                      <Typography component="p" className={classes.designDeatilsCard}>
                        Start Time: {startTime ? new Date(startTime).toString() : "Not Available"}
                      </Typography>
                      <Typography component="p" className={classes.designDetailsCard}>
                        Status: {space.state}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          : "No Spaces available yet!!"}
      </div>
    </>
  );
}
