import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import './Banner.css'

const useStyles = makeStyles({
    root: {
        width:"100vw",
        paddingTop:"20px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button:{
        margin:" 40px auto", 
        display:"table",
        border:"3px solid grey",
        borderRadius:"5px", 
        backgroundColor:"white", 
        padding:"8px 16px",
        cursor:"pointer",
    }

});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <React.Fragment>
        <Container className={classes.root} variant="outlined">
            <h2>Feature Products</h2>
            <Grid container spacing={3} style={{backgroundColor:"#f1f1f1"}}>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/282281464-240x180.webp"
                            />
                            <h3>Rs 10,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               KIA
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/285860711-240x180.webp"
                            />
                            <h3>Rs 10,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Swift
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/t2o7uekpzf9s3-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 18,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Corolla
                               <p></p>
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ovhjg869aavg-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               RED Car
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{paddingTop:"20px"}}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/whvljv2bhp5j1-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,00</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Swing
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/h0792ferx08g1-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 20,000000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               House
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ugfeekcir34h2-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 1000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Machines
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"

                            />
                            <h3>Rs 22,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Laptop
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/279070818-240x180.webp"
                            />
                            <h3>Rs 1600</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                              civic
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/288960680-240x180.webp"

                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/280325517-240x180.webp"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Laptop
                               <p>Core i5</p>
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://images.olx.com.pk/thumbnails/287470959-240x180.webp"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                              Laptop
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/7bfoecqfery72-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 200,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               HOUSE
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ovhjg869aavg-PK/image;s=300x600;q=60"

                            />
                            <h3>Rs 19,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Red Car
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/u7lranmjo8cb-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 18,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               White Car
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>
            
        </Container>

        <div>
            <button  className={classes.button}>
                Load More
            </button>
        </div>

        <div className='bottom_olx' style={{padding:"0px", display:"flex", backgroundColor:"white"}}>
            <div className='img'>
                <img 
                src='https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp'
                />
            </div>

            <div>
                <h2 style={{
                    color: "#002f34"
                }}>TRY THE OLX APP</h2>
                <p style={{
                    color: "#002f34"
                }}>Buy, sell and find just about anything using <br></br> the app on your mobile.</p>
            </div>

            <div className='link' style={{margin:"40px",color: "#002f34"}}>
                <h3 className='title'>Get Your App Today</h3>

                <div style={{display:"flex"}}>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg'/></a>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg'/></a>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg'/></a>
                </div>
            </div>
    
        </div>


                <div className='bottom_olx' style={{padding:"0px", display:"flex", backgroundColor:"white"}}>
   
                <ul className='ul1'>
                <li><strong> POPULAR CATEGORIES </strong></li>
                <li> Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
         
         
                <li><strong> TRENDING SEARCHES </strong></li>
                <li> Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
         
            
                <li><strong> ABOUT US </strong></li>
                <li> Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
         
             
                <li><strong> OLX </strong></li>
                <li> Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
         
                </ul>

   

            <div className='link' style={{margin:"40px",color: "#002f34"}}>
                <h3 className='title'>Get Your App Today</h3>

                <div style={{display:"flex"}}>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg'/></a>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg'/></a>
                <a href='#'> <img src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg'/></a>
                </div>
            </div>
    
        </div>
        



    
    
     

                 <div style={{
                        background: "#002f34",
                        color: "white"

                    }}>
                       <h4 style={{
                        margin: "10px",
                        textAlign: "right"
                       }}>
                        <br/>
                        Free Classifieds in Pakistan .ⓒ2006-2022 OLX
                        <br/>
                        <br/>
                        </h4>
    
            </div>
        
        
        </React.Fragment>
    );
}

