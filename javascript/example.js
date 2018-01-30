// specify the columns
var columnDefs = [
    { field: "1"},
    {headerName: "2", field: "2"},
    {headerName: "3", field: "3"},
    {headerName: "4", field: "4"},
    {headerName: "5", field: "5"},
    {headerName: "6", field: "6"},
    {headerName: "7", field: "7"},
    {headerName: "8", field: "8"},
    {headerName: "9", field: "9"},
    {headerName: "10", field: "10"},
    {headerName: "11", field: "11"},
    {headerName: "12", field: "12"},
    {headerName: "13", field: "13"},
    {headerName: "14", field: "14"},
    {headerName: "15", field: "15"},
    {headerName: "16", field: "16"},
    {headerName: "17", field: "17"},
    {headerName: "18", field: "18"},
    {headerName: "19", field: "19"},
    {headerName: "20", field: "20"}
    
];

// specify the data
var rowData = [
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""},
    {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""}
];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    }
};

// used in our jasmine test
function selectAllRows() {
    gridOptions.api.selectAll();
}

// wait for the document to be loaded, otherwise ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});
