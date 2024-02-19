import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

interface WaitProps { children: React.ReactNode; isLoading: boolean }
const Wait = ({ children, isLoading }: WaitProps) => {
    return (
        <>
            {(isLoading) ? <HourglassBottomIcon /> : children}
        </>
    );
}
export default Wait;