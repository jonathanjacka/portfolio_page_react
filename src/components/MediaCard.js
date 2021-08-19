import React from 'react';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '16.25rem',
    margin: '1rem',
  },
  media: {
    height: '16.25rem',
  },
  content: {
    height: '5rem',
  },
  text: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
});

export default function MediaCard({ image, title, content }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia image={image} title={title} className={classes.media} />
        <CardContent className={classes.content}>
          <Typography className={classes.text}>{content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
