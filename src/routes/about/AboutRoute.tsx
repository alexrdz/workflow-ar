import * as React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

// import 'styles from' './AboutRoute.scss';

export const AboutRoute: React.FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div>
        <h1>Thank you!</h1>
        <p>Your information has been submitted.</p>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>DOB</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{firstName}</TableCell>
                <TableCell>{lastName}</TableCell>
                <TableCell>{dob}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  return (
    <div>
      <h1>About</h1>
      <form onSubmit={e => onSubmit(e)}>
        <TextField
          label="First Name"
          className={"styles.textField"}
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Last Name"
          className={"styles.textField"}
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="DOB"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          className={"styles.textField"}
          value={dob}
          onChange={event => setDob(event.target.value)}
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
