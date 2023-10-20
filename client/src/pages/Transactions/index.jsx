import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';
import Header from 'components/Header';
import { TransactionColumns as columns } from 'data';
import { useGetTransactions } from 'hooks';
import { useState } from 'react';

const Transactions = () => {
    const theme = useTheme();

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sortModel, setSortModel] = useState([]);
    const [search, setSearch] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const { data: transactionData, isLoading } = useGetTransactions({
        page,
        pageSize,
        sort: sortModel[0] ? JSON.stringify(sortModel[0]) : undefined,
        search,
    });

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
    };

    const handleSortChange = (newSortModel) => {
        setSortModel(...newSortModel);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="TRANSACTIONS"
                subtitle="Entire list of transactions"
            />
            <Box height="80vh" sx={{}}>
                {/* TODO: Only show 25 rows even for 100 selected */}
                <DataGrid
                    loading={isLoading || !transactionData}
                    getRowId={(row) => row._id}
                    rows={
                        (transactionData && transactionData.transactions) || []
                    }
                    columns={columns}
                    rowCount={
                        (transactionData && transactionData.totalDoc) || 0
                    }
                    rowsPerPage={[20, 50, 100]}
                    pagination
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    onSortModelChange={handleSortChange}
                    slots={{ toolbar: DataGridCustomToolbar }}
                    slotProps={{
                        toolbar: {
                            searchInput,
                            setSearchInput,
                            setSearch,
                            handleSearchInputChange,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Transactions;
