import React from 'react';
import { useContextsCart } from "../context/ContextsCart";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Card from '@material-ui/core/Card';
import { CardImg } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display:'flex',
    flexDirection:'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detail: {
    display: 'flex',
    alignItems:'flex-start',
    
  },
}));

const AccordionDetail = (
  {
    prodId,
    price,
    quantity,
    prodTitle,
    srcImg,
  }
) => {
  const { cartItems, setCartItems } = useContextsCart();    
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteItem = (id) => {
    const index = cartItems.indexOf(el => el.prodId==id);
    console.log(id);
    console.log(index);
    
    //setCartItems([...cartItems, cartItems])
  }

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <DeleteForeverOutlinedIcon onClick={() => deleteItem(prodId)}/>
            <CardImg  src={srcImg}/>
          </Typography>
          <Typography className={classes.secondaryHeading}>{prodTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography className={classes.detail}>
            Unidades: {quantity}<br/>
            Precio: ${price}<br/>
          </Typography>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionDetail
