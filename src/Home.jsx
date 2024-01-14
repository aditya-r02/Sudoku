import { useState } from "react";
import toast from "react-hot-toast";

export default function Home(){
    let index = [0, 1, 2, 3 , 4, 5, 6, 7, 8];

    const [data, setData] = useState(
        [['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','',''],  ['','','','','','','','',''], ['','','','','','','','',''],
        ['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','','']]
    )

    const resetData = () =>{
        let tmp = [['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','',''],  ['','','','','','','','',''], ['','','','','','','','',''],
        ['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','',''], ['','','','','','','','','']];
        setData(tmp);
        let tmp1 =  [[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false]];
        setFilled(tmp1);
    }

    const [filled, setFilled] = useState(
        [[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false]]
    )

    const findBoxNo = (i, j) =>{
        if (i<=2){
            if (j<=2) return 0;
            else if(j<=5) return 1;
            else return 2;
        }
        else if(i<=5){
            if (j<=2) return 3;
            else if(j<=5) return 4;
            else return 5;
        }
        else{
            if (j<=2) return 6;
            else if(j<=5) return 7;
            else return 8;
        }
        
    }
    

    const findSol1 = (i, j, mat, rowCheck, colCheck, boxCheck) =>{
        
        if (i===9){
            // we have reached the ans;
            //console.log("End")
            //console.log(mat);
            //console.log(rowCheck)
            //flag = true;
            setData(mat);
            return true;
        }
        //console.log("hello")
        
        if (mat[i][j]===''){
            for (let val=1; val<=9; val++){
                if (rowCheck[i][val]===0 && colCheck[j][val]===0 && boxCheck[findBoxNo(i,j)][val]===0){
                    rowCheck[i][val]=1; colCheck[j][val]=1; boxCheck[findBoxNo(i,j)][val]=1;
                    mat[i][j] = val.toString();
                    //console.log(mat[i][j])
                    if (j<8){
                        let ans = findSol1(i, j+1, mat, rowCheck, colCheck, boxCheck);
                        if (ans) return true;
                    }else{
                        let ans = findSol1(i+1, 0, mat, rowCheck, colCheck, boxCheck);
                        if (ans) return true;
                    }
                    mat[i][j]=  '';
                    rowCheck[i][val]=0; colCheck[j][val]=0; boxCheck[findBoxNo(i,j)][val]=0;
                }
            }
            //console.log("yo")
        }
        else{
            if (j<8){
                let ans = findSol1(i, j+1, mat, rowCheck, colCheck, boxCheck);
                if (ans) return true;
            }else{
                let ans = findSol1(i+1, 0, mat, rowCheck, colCheck, boxCheck);
                if (ans) return true;
            }
        }
        
    }

    const findSol = () =>{
        let fill = [[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false]];

        // checking if sudoku is correct

        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                if (!(data[i][j]===''||(data[i][j]>='1'&&data[i][j]<='9'))){
                    console.log("galat baat")
                    toast.error("Only Numbers 1-9 are allowed");
                    return ;
                }
                else if(data[i][j]>='1'&&data[i][j]<='9'){
                    fill[i][j] = true;
                }
            }
        }
        setFilled(fill);
        //console.log("hello1");
        let mat = data.map(arr=>[...arr]);
        let rowCheck = [[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
        let colCheck =  [[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
        let boxCheck = [[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
        
        // setting rowCheck, colCheck, boxCheck and also checking if sudoku is right
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                let val = parseInt(mat[i][j]);
                rowCheck[i][val]++;
                colCheck[j][val]++;
                boxCheck[findBoxNo(i,j)][val]++;
                if (rowCheck[i][val]>1 || colCheck[j][val]>1 || boxCheck[findBoxNo(i,j)][val]>1){
                    console.log("sharam kar");
                    toast.error("Enter a valid problem");
                    return;
                }
            }
        }

        // After this, sudoku is 100% correct
        //console.log("Yo")
        //console.log(rowCheck)
        //console.log(colCheck);
        //console.log(boxCheck)
        findSol1(0,0,mat,rowCheck, colCheck, boxCheck);

    }

    const updateElement = (i,j,newVal) =>{
        //console.log("hello1");
        let len = newVal.length;
        let str = newVal.charAt(len-1) || '';
        let newArray = data.map(ar=>[...ar]);
        //console.log(newArray);
        newArray[i][j] = str;
        setData(newArray);
        
    }
    const handleClick = (element) =>{
        //console.log("hello");
        //console.log(element.target.getAttribute('x'))
        let i = parseInt(element.target.getAttribute('x')), j = parseInt(element.target.getAttribute('y'));
        let newVal = element.target.value || '';
        //console.log(i, j, newVal);
        updateElement(i,j,newVal);
        
    }
    //console.log(data['']['']);
    return (
        <div className="mx-auto mt-20 tablet:mt-10">

            <div>
            {
                index.map(i=>{
                    //console.log(i);
                    return (
                        <div className="w-fit">
                            <div className="flex " key={i}>
                                {
                                    index.map(j=>{
                                        //console.log(data[i][j]);
                                        //let val = data[i][j];
                                        //console.log(val);
                                        ///console.log(i+""+j)
                                        return (
                                            <div className="flex">
                                                <input type="text" className={`w-8 h-8 outline-none appearance-none 
                                                ${filled[i][j]?'font-bold':'text-blue-600'}
                                                text-center border-[1px] border-slate-600`}
                                                    value={data[i][j]} onChange={handleClick} x={i} y={j}
                                                    placeholder="-" key={j}
                                                />
                                                {
                                                    (j===2||j===5) &&
                                                    (<div className="h-[100%] w-[0.12rem] bg-black "></div>)
                                                }
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                            {
                                    (i===2||i===5) && 
                                    (<div className="w-full h-[0.12rem] bg-black "></div>)
                                }
                        </div>
                    )
                })
            }
            </div>


            <div className="flex justify-center gap-16 mt-10 ">
                <button onClick={findSol} className="flex items-center justify-center py-2 px-3 bg-red-600 rounded-md text-lg
                font-medium text-white">
                    Submit
                </button>

                <button onClick={resetData}  className="flex items-center justify-center py-2 px-3 bg-sky-500 rounded-md text-lg
                font-medium text-white">
                    Clear
                </button>
            </div>
        </div>
    )

}
