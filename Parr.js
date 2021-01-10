
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

    for(let i=colum_one;i<=colum_two;++i)
  {
  arr[roww_one][i]=count;
    count++;
    }

    for (let i=roww_one+1;i<=roww_two;++i)
    {
        arr[i][colum_two]=count;
        count++;
    }
    if (roww_one<roww_two && colum_one<colum_two) 
    {
        
        for (let i=colum_two-1;i>colum_one;i--)
        {
            arr[roww_two][i]=count;
            count++;
        }
        for (let i=roww_two;i>roww_one;i--)
        {
            arr[i][colum_one]=count;
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