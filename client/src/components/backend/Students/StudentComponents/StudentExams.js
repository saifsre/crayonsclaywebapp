import React from 'react'
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = {
    root : {
        height: '100%',
        width: '100%'
    }

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
    var data= [];
    tableData.forEach(arr => {
        var sarr = []
        sarr.push(arr.Id);
        sarr.push(arr.exam.examType);
        sarr.push(arr.exam.course.name);
        sarr.push(arr.exam.examDateTime);
        sarr.push(arr.exam.examLocation); 
        sarr.push(arr.marks); 
        data.push(sarr); 
    }); 
    return(
        <div className={classes.root}>
            <Paper>
                <Table>
                    <TableHead>
                        <tr>
                       <GenerateTableCells items={columns}/>  
                       </tr>   
                    </TableHead>   
                    <TableBody>
                        <PopulateTableData items={data}/>
                    </TableBody> 
                </Table>    
            </Paper>    
        </div>
    )

}
export default withStyles(styles)(StudentExams)