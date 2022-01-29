import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup  from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
// import AddCommentIcon from '@material-ui/icons/AddComment';
import SendIcon from '@material-ui/icons/Send';
// import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import { FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  // btn: {
  //   fontSize: '60',
  //   backgroundColor: 'turquoise',
  //   '&:hover': {
  //     backgroundColor: '#2f93e0'
  //   }
  // },
  // title: {
  //   fontSize: '40',
  //   color: 'violet'
  // }

  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'Block'
  }
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography
        // className={classes.title}
        variant="h4"
        component="h1"
        gutterBottom
        color="secondary"
      >
        Create page
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Blog Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Blog Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Choose one</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          // className={classes.btn}
          endIcon={<SendIcon />}
          // disableElevation
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>

      {/* <Button variant="contained">Submit</Button> */}
      {/* <Button variant="contained" color="secondary">Submit</Button> */}
      {/* <Button startIcon={<SendIcon/>} endIcon={<CancelScheduleSendIcon/>} variant="contained" color="secondary">Submit</Button> */}
      {/* <Button variant="outlined" color="primary" disableElevation>Submit</Button> */}

      {/* <ButtonGroup variant="contained" color="textSecondary">
        <Button>Group-Submit</Button>
        <Button>Group-Submit</Button>
        <Button>Group-Submit</Button>
      </ButtonGroup> */}

      <br />

      {/* <AddCommentIcon />
      <AddCommentIcon color="primary" fontSize="large" />
      <AddCommentIcon color="secondary" />
      <AddCommentIcon color="action" fontSize="small" />
      <AddCommentIcon color="error" fontSize="small" />
      <AddCommentIcon color="disabled" fontSize="small" /> */}
    </Container>
  )
}
