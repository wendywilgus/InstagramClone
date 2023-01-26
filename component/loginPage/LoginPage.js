import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import './LoginPage.css';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png'


class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img 
                                    src={inst_image}
                                    alt=""
                                    width="450"
                                    />
                            </div>
                            <div>
                                <img 
                                    src={inst_logo}
                                    alt=""
                                    />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        Wendy
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LogInPage;