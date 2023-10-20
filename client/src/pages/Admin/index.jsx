import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CustomColumnMenu from 'components/DataGridCustomColumnMenu';
import Header from 'components/Header';
import { AdminColumns as columns } from 'data';
import { useGetAdmins } from 'hooks';

const Admin = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetAdmins();

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="ADMINS"
                subtitle="Managing admins and list of admins"
            />
            <Box
                mt="40px"
                height="75vh"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: theme.palette.primary.light,
                    },
                    '& .MuiDataGrid-footerContainer': {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: 'none',
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}
                    slots={{
                        columnMenu: CustomColumnMenu,
                    }}
                />
            </Box>
        </Box>
    );
};

export default Admin;
