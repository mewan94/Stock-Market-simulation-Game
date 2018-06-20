export async function authUser() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    return true;
}

export function getSpecialEvents() {

    let arr = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];

    /*select random 6 sectors*/
    let selected = [];
    while(selected.length !== 6){
        let random = Math.round(Math.random()*10)
        if(!selected.includes(random)) {
            selected.push(random)
        }
    }
    /*
    Rise-High : +100%
    Rise-Medium : +50%
    Rise-Low : +10%

    Fail-High : -100%
    Fail-Medium : -50%
    Fail-Low : -10%

    */

    /*will give array for sectors [RH,RM,RL,FH,FM,FL]*/

    let RH = 50;
    let RM = 20;
    let RL = 10;
    let FH = -50;
    let FM = -20;
    let FL = -10;


    arr.forEach((item,i) => {
        if(i === selected[0]){
            arr[i] = [RH,RH,RH,RH,RH,RH,RH,RH,RH,RH]
        }else if(i === selected[1]){
            arr[i] = [RM,RM,RM,RM,RM,RM,RM,RM,RM,RM]
        }else if(i === selected[2]){
            arr[i] = [RL,RL,RL,RL,RL,RL,RL,RL,RL,RL]
        }else if(i === selected[3]){
            arr[i] = [FH,FH,FH,FH,FH,FH,FH,FH,FH,FH]
        }else if(i === selected[4]){
            arr[i] = [FM,FM,FM,FM,FM,FM,FM,FM,FM,FM]
        }else if(i === selected[5]){
            arr[i] = [FL,FL,FL,FL,FL,FL,FL,FL,FL,FL]
        }

        /*select random 6 companies for round*/
        let selectedC = [];
        while(selectedC.length !== 6){
            let random = Math.round(Math.random()*10)
            if(!selectedC.includes(random)) {
                selectedC.push(random)
            }
        }

        /*will give array for companies[RH,RM,RL,FH,FM,FL]*/

        arr[i][selectedC[0]] = arr[i][selectedC[0]]+RH;
        arr[i][selectedC[1]] = arr[i][selectedC[1]]+RM;
        arr[i][selectedC[2]] = arr[i][selectedC[2]]+RL;
        arr[i][selectedC[3]] = arr[i][selectedC[3]]+FH;
        arr[i][selectedC[4]] = arr[i][selectedC[4]]+FM;
        arr[i][selectedC[5]] = arr[i][selectedC[5]]+FL;

        arr[i] = arr[i].slice(0,10);

    });
    console.log(arr)

}