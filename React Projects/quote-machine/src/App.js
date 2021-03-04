import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Tooltip,
  Divider,
  TextField,
  Box,
  Link,
  Position,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

var colors = [
  "#490A3D",
  "#BD1550",
  "#E97F02",
  "#F8CA00",
  "#8A9B0F",
  "#69D2E7",
  "#FA6900",
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#77B1A9",
  "#73A857",
];

function App() {
  const [current_quote, setQuote] = useState("");

  const quote_storage = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "—Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "—Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "—Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "—Robert Frost",
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "—Kevin Kruse",
    },
    {
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "—John Lennon",
    },
    { quote: "We become what we think about.", author: "—Earl Nightingale" },
    {
      quote:
        "14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "—Mark Twain",
    },
    {
      quote: "15.Life is 10% what happens to me and 90% of how I react to it.",
      author: "—Charles Swindoll",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "—Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "—Buddha",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "—Chinese Proverb",
    },
    { quote: "An unexamined life is not worth living.", author: "—Socrates" },
    {
      quote: "Eighty percent of success is showing up.",
      author: "—Woody Allen",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "—Steve Jobs",
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "—Vince Lombardi",
    },
    {
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "—Stephen Covey",
    },
    {
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "—Pablo Picasso",
    },
    {
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "—Christopher Columbus",
    },
    {
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "—Maya Angelou",
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "—Jim Rohn",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "—Henry Ford",
    },
  ];

  const randomNum = Math.floor(Math.random() * quote_storage.length);
  const randomColor = Math.floor(Math.random() * colors.length);

  useEffect(() => {
    setQuote([quote_storage[randomNum].quote, quote_storage[randomNum].author]);
  }, []);

  function newQuote() {
    setQuote([quote_storage[randomNum].quote, quote_storage[randomNum].author]);
  }

  const classes = useStyles();

  console.log(current_quote, "THIS");

  return (
    <div
      id="quote-box"
      style={{
        backgroundColor: `${colors[randomColor]}`,
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
      }}
    >
      <CssBaseline />
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        style={{ height: "100vh" }}
        maxWidth="35vw"
        minWidth="35vw"
      >
        <Box minWidth="35vw" maxWidth="35vw">
          <Paper className={classes.paper}>
            <div
              id="text"
              style={{
                color: `${colors[randomColor]}`,
                fontSize: "1.3rem",
                transition: "all .5s ease",
                WebkitTransition: "all .5s ease",
                MozTransition: "all .5s ease",
              }}
            >
              {current_quote[0]}
            </div>
            <div
              id="author"
              style={{
                paddingTop: "1rem",
                textAlign: "right",
                color: `${colors[randomColor]}`,
                transition: "all .5s ease",
                WebkitTransition: "all .5s ease",
                MozTransition: "all .5s ease",
              }}
            >
              {current_quote[1]}
            </div>
            <Divider style={{ margin: "1rem" }} />
            <Grid container justify="space-between">
              <Link
                id="tweet-quote"
                target="_blank"
                position="left"
                href={
                  `https://twitter.com/intent/tweet?text=` +
                  encodeURIComponent(
                    `"` + current_quote[0] + `" ` + current_quote[1]
                  )
                }
              >
                <TwitterIcon
                  style={{ color: `${colors[randomColor]}` }}
                  fontSize="large"
                />
              </Link>
              <Button
                variant="contained"
                id="new-quote"
                onClick={newQuote}
                style={{
                  alignContent: "left",
                  backgroundColor: `${colors[randomColor]}`,
                  color: "white",
                }}
              >
                New QUote
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
