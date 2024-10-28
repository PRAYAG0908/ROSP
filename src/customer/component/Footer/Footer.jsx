import { Button, Grid, Typography,Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Job
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" glutterBottom>
              Terms
            </Button>
          </div>
          
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
           .
          </Typography>
          <Typography variant="body2" component="p" align="center">
           
            {/* <Link href="https://www.Flipkart.com" color="inherit" underline="always">
              Flipkart 
            </Link>
             from{'  '}
            <Link href="https://www.myntra.com/" color="inherit" underline="always">
              myntra
            </Link> */}
          </Typography>

        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
