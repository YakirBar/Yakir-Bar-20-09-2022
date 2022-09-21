import {
    Icon,
    Rating,
    Dialog,
    Button,
    Tooltip,
    ListItem,
    TextField,
    Typography,
    IconButton,
    ListItemIcon,
    ListItemText,
    DialogContent,
    ListItemButton
} from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const Rate = ({ t, open }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const { handleSubmit, control } = useForm();

    const submit = (values) => {
        //values are ready to send
        setOpenDialog(false)
    };

    return (
        <>
            <Tooltip placement="right" title={t('RATE_ME')}>
                <ListItem disablePadding >
                    <ListItemButton
                        sx={{
                            px: 2.5, 
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center'
                        }}
                        onClick={() => setOpenDialog(true)}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1.5 : 'auto',
                                justifyContent: 'center'
                            }}>
                            <Icon color='primary'>star</Icon>
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                whiteSpace: 'nowrap',
                                opacity: open ? 1 : 0
                            }}
                            primary={t('RATE_ME')} />
                    </ListItemButton>
                </ListItem>
            </Tooltip>
            <Dialog
                fullWidth
                open={openDialog}
                onClose={() => { }}>
                <IconButton className='self-start' onClick={() => setOpenDialog(false)}>
                    <Icon>close</Icon>
                </IconButton>
                <Typography variant='h5' className='self-center'>
                    {t('RATE_TITLE')}
                </Typography>
                <form onSubmit={handleSubmit(submit)}>
                    <DialogContent sx={{ mt: 1 }} className='flex flex-col items-center' >
                        <Controller
                            name='rate'
                            control={control}
                            defaultValue={4.5}
                            render={({ field: { onChange } }) => (
                                <Rating
                                    precision={0.5}
                                    defaultValue={4.5}
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            name='description'
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextField
                                    rows={3}
                                    multiline
                                    value={value}
                                    sx={{ mt: 2 }}
                                    className='w-1/2'
                                    autoComplete='off'
                                    onChange={onChange}
                                    label={t('RATE_DESCRIPTION')}
                                    inputProps={
                                        { maxLength: 100 }
                                    }
                                    helperText={`${value?.length ?? 0}/100`}
                                />
                            )}
                        />
                        <Button
                            type='submit'
                            sx={{ mt: 4 }}
                            className='w-1/2'
                            variant='contained'
                        >
                            {t('SEND')}
                        </Button>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
};

export default Rate;