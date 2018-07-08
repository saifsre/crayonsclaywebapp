import React from 'react'
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = {

}
const GenerateTableCells = ({items})=>{
    
        {
           return(
            items.map((item,i)=><TableCell numeric key={i}> {item}</TableCell>)
           )} 
}
const PopulateTableData = ({items})=>{
    {
        return(
            items.map((item,i)=><TableRow key={i}><GenerateTableCells items={items[i]}/></TableRow>)
        )}
}

function StudentExams(props) {
    const {classes} = props;
    const {columns} = props;
    const {tableData} = props;
    return(
        <div>
            <Paper>
                <Table>
                    <TableHead>
                       {/* <GenerateTableCells items={columns}/>      */}
                    </TableHead>   
                    <TableBody>
                        {/* <PopulateTableData items={tableData}/> */}
                    </TableBody> 
                </Table>    
            </Paper>    
        </div>
    )

}
export default withStyles(styles)(StudentExams)