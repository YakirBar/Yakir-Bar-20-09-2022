import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const ShowMessage = ({ t, message }) => {
    const [open, setOpen] = useState(true);

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert onClose={() => setOpen(false)} severity="error">
                {message}, {t("TRY_AGAIN")}
            </Alert>
        </Snackbar>
    );
};

export default ShowMessage;