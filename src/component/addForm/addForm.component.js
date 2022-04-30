import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography, MenuItem, Divider, withStyles } from '@mui/material';
import { grey, teal } from '@mui/material/colors';

const foodType = [
    {
        value: "drink",
        label: "Drink"
    },
    {
        value: "food",
        label: "Food"
    }
];

function AddForm({ open, setOpen, handleSave, ...props }) {
    const [values, setValues] = React.useState({
        product: "",
        type: "",
        quantity: 0,
        unitPrice: 0,
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChange = (event, name) => {
        const updatedValues = { ...values };

        updatedValues[name] = event.target.value;
        setValues(updatedValues);
    };

    const checkValid = () => {
        const invalidEntries = Object.keys(values).filter(value => !values[value]);
        return invalidEntries.length > 0;
    }

    return (
        <div className="form">
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Food Item</DialogTitle>
                <DialogContent >
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid
                                container
                                direction="row"
                                spacing={1}
                            >
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        variant="outlined"
                                        label="Product"
                                        onChange={(event) => handleOnChange(event, 'product')}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        style={{ marginTop: 20 }}
                                        label="Type"
                                        fullWidth
                                        select
                                        variant="outlined"
                                        value={values.type}
                                        margin="dense"
                                        onChange={(event) => handleOnChange(event, 'type')}
                                        color="secondary"
                                    >
                                        {foodType.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        variant="outlined"
                                        label="Quantity"
                                        type="number"
                                        color="secondary"
                                        onChange={(event) => handleOnChange(event, 'quantity')}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        variant="outlined"
                                        label="Unit Price"
                                        type="number"
                                        color="secondary"
                                        onChange={(event) => handleOnChange(event, 'unitPrice')}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="outlined" color="secondary" onClick={() => handleSave(values)} disabled={checkValid()}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddForm;