let func = () =>{
    document.getElementById('container').style.visibility="visible";
    let inp = document.getElementById('data').value;
    let res = 0;
    for(let i = 1;i<=10;i++)
    {
        res = inp*i;
        document.getElementById('container').innerHTML += inp+' x '+i+' = '+res+"<br\>";
    }
         
}   