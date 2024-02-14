import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


const DatePickerInput = ({ nombre, label }: any) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={nombre}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField type='date'
                    {...field}
                    fullWidth
                    label={label}
                />
            )}
        />
    )
}
export default DatePickerInput;