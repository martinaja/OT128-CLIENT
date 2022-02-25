import React from "react";
import { makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import { ActivitiesCard } from "./ActivitiesList";
import { Grid } from "@mui/material";

const useStyles = makeStyles(theme => ({
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));


export const AllProjects = ({projectsList}, {numItems=6}) => {
  const classes = useStyles();
  const itemsPerPage = numItems;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(projectsList.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
    <Grid container>
        {projectsList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((projectItem, index )=> {
            return (
                <Grid item xs={8} md={6} lg={4} key={index}>
                <ActivitiesCard
                  name={projectItem.name}
                  image={projectItem.image}
                  description={projectItem.description}
                  isMin={true}

                  key={index}

                />
                </Grid>
              )
          })}
      </Grid>
      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
};


// const projectsList = [
//   {
//     projectID: 2,
//     projectName: "score"
//   },
//   {
//     projectID: 4,
//     projectName: "score"
//   },
//   {
//     projectID: 5,
//     projectName: "score"
//   },
//   {
//     projectID: 15,
//     projectName: "score"
//   },
//   {
//     projectID: 16,
//     projectName: "score"
//   },
//   {
//     projectID: 17,
//     projectName: "score"
//   },
//   {
//     projectID: 18,
//     projectName: "score"
//   },
//   {
//     projectID: 19,
//     projectName: "Marathon"
//   },
//   {
//     projectID: 20,
//     projectName: "TestProject"
//   },
//   {
//     projectID: 24,
//     projectName: "score"
//   },
//   {
//     projectID: 25,
//     projectName: "manu"
//   },
//   {
//     projectID: 26,
//     projectName: "score"
//   },
//   {
//     projectID: 27,
//     projectName: "score"
//   },
//   {
//     projectID: 28,
//     projectName: "123"
//   },
//   {
//     projectID: 29,
//     projectName: "1234"
//   },
//   {
//     projectID: 30,
//     projectName: "Sample"
//   },
//   {
//     projectID: 31,
//     projectName: "1"
//   },
//   {
//     projectID: 32,
//     projectName: "1"
//   },
//   {
//     projectID: 33,
//     projectName: "2"
//   },
//   {
//     projectID: 34,
//     projectName: "score"
//   },
//   {
//     projectID: 35,
//     projectName: "TestProject2"
//   },
//   {
//     projectID: 36,
//     projectName: "score"
//   },
//   {
//     projectID: 37,
//     projectName: "score"
//   },
//   {
//     projectID: 38,
//     projectName: "AWS "
//   },
//   {
//     projectID: 39,
//     projectName: "AWS TEST"
//   },
//   {
//     projectID: 40,
//     projectName: "score"
//   },
//   {
//     projectID: 41,
//     projectName: "hahj"
//   },
//   {
//     projectID: 42,
//     projectName: "hahj"
//   },
//   {
//     projectID: 44,
//     projectName: "nnaj"
//   },
//   {
//     projectID: 46,
//     projectName: "Best Western"
//   },
//   {
//     projectID: 50,
//     projectName: "score"
//   },
//   {
//     projectID: 51,
//     projectName: "score"
//   },
//   {
//     projectID: 52,
//     projectName: "score"
//   },
//   {
//     projectID: 53,
//     projectName: "sample"
//   },
//   {
//     projectID: 54,
//     projectName: "ABC"
//   },
//   {
//     projectID: 56,
//     projectName: "sample project"
//   },
//   {
//     projectID: 57,
//     projectName: "XYZProject"
//   },
//   {
//     projectID: 58,
//     projectName: "test"
//   },
//   {
//     projectID: 59,
//     projectName: "b"
//   },
//   {
//     projectID: 60,
//     projectName: "test"
//   },
//   {
//     projectID: 61,
//     projectName: "SAMPLE"
//   },
//   {
//     projectID: 62,
//     projectName: "SAMPLE"
//   },
//   {
//     projectID: 63,
//     projectName: "score"
//   },
//   {
//     projectID: 64,
//     projectName: "score"
//   },
//   {
//     projectID: 65,
//     projectName: "TestRandom"
//   },
//   {
//     projectID: 66,
//     projectName: "RandomProjectName"
//   },
//   {
//     projectID: 67,
//     projectName: "test"
//   },
//   {
//     projectID: 68,
//     projectName: "Best Western International"
//   },
//   {
//     projectID: 69,
//     projectName: "a"
//   },
//   {
//     projectID: 70,
//     projectName: "RandomProjectName"
//   },
//   {
//     projectID: 71,
//     projectName: "SecretProject"
//   },
//   {
//     projectID: 77,
//     projectName: "score"
//   },
//   {
//     projectID: 79,
//     projectName: "RandomProjectName2"
//   },
//   {
//     projectID: 80,
//     projectName: "RandomProjectName2"
//   },
//   {
//     projectID: 82,
//     projectName: "YetAnotherRandomProject"
//   },
//   {
//     projectID: 84,
//     projectName: "Test Project 2"
//   },
//   {
//     projectID: 96,
//     projectName: "CannotStopWithRandomProjects"
//   },
//   {
//     projectID: 111,
//     projectName: "S.H.I.E.L.D"
//   },
//   {
//     projectID: 113,
//     projectName: "Avengers"
//   },
//   {
//     projectID: 114,
//     projectName: "Justice League"
//   },
//   {
//     projectID: 124,
//     projectName: "TestProject"
//   },
//   {
//     projectID: 126,
//     projectName: "Justice League"
//   },
//   {
//     projectID: 127,
//     projectName: "Test Project"
//   },
//   {
//     projectID: 133,
//     projectName: "test project"
//   }
// ];
