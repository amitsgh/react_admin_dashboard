import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
} from '@mui/x-data-grid';
import FlexBtw from './FlexBtw';

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        setSearch(searchInput);
        setSearchInput('');
    };

    return (
        <GridToolbarContainer>
            <FlexBtw width="100%">
                <FlexBtw>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBtw>
                <TextField
                    label="Search..."
                    sx={{ mb: '0.5rem', width: '15rem' }}
                    onChange={handleSearchInput}
                    value={searchInput}
                    variant="standard"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleSearch}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FlexBtw>
        </GridToolbarContainer>
    );
};

export default DataGridCustomToolbar;
