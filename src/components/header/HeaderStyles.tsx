import { withStyles } from '@material-ui/core/styles';
import {AppBar, MenuList} from "@material-ui/core";

export const StyledAppBar = withStyles({
  root: {
		background: '#fff',
		borderBottom: '1px solid #ccc',
    boxShadow: 'none',
  }
})(AppBar);


export const StyledMenuList = withStyles({
	root: {
		marginTop: 0,
		paddingTop: 0,
	}
})(MenuList);
