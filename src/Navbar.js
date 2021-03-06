import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import {ThemeContext} from './context/themeContext';

class Navbar extends Component{
    //create a static context type for the theme provider
    static contextType = ThemeContext;
    render(){
        const {isDarkMode, toggleTheme} = this.context;
        const {classes} = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? 'default': 'primary'}>
                <ToolBar>
                    <IconButton className={classes.menuButton} color="inherit">
                       <span>French</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Titile
                    </Typography>
                    <Switch onChange={toggleTheme}/>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.SearchIcon}>
                         <SearchIcon/>   
                        </div>
                        <InputBase palceholder="search" classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}/>
                    </div>
                </ToolBar>

            </AppBar>
            </div>
        );
    }
}
export default withStyles(styles)(Navbar);