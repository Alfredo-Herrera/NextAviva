import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ansers } from './help';

const MultiSelect: FC<{ nextQuestion: any }> = ({ nextQuestion }) => {
    return (
        <List
            dense={false}
            sx={{
                width: '100%',
                textAlign: 'center',
                margin: 'auto',
            }}
            component="nav"
        >
            {ansers?.map((value, index) => {
                return (
                    <ListItem key={`${value}-${index}`} divider={true}>
                        <Chip
                            label={
                                <Typography variant="h4">{value}</Typography>
                            }
                            onClick={() => nextQuestion()}
                            color="primary"
                            sx={{ width: '100%', height: '5vh' }}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default MultiSelect;
