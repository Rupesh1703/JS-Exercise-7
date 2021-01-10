
let roww_one=0
let roww_two=9
let colum_one=0
let colum_two=9
let arr=[];
let count=1;
for(let i=0;i<10;++i)
{
 arr[i]=[];
}

while(roww_one<=roww_two && colum_one<=colum_two){

    for(let j=colum_one;j<=colum_two;j++)
  {
  arr[roww_one][j]=count;
    count++;
    }

    for (let k=roww_one+1;k<=roww_two;k++)
    {
        arr[k][colum_two]=count;
        count++;
    }
    if (roww_one<roww_two && colum_one<colum_two) 
    {
        
        for (let l=colum_two-1;l>colum_one;l--)
        {
            arr[roww_two][l]=count;
            count++;
        }
        for (let m=roww_two;m>roww_one;m--)
        {
            arr[m][colum_one]=count;
            count++;
        }
    }
    roww_one++;
    roww_two--;
    colum_one++;
    colum_two--;
}
//console.log(arr);
//console.log(arr.map(r => r))
//console.log(arr.map(r=>r.concat()))
console.log(arr.map(r => r.join(' ')).join('\n'))