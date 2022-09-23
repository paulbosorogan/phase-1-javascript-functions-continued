// code your solution here
function saturdayFun(activity){
    if (activity === undefined){
        return "This Saturday, I want to roller-skate!"
    }
    else {
        return `This Saturday, I want to ${activity}!`}
}

const mondayWork = function (something){
    if (something === undefined){
        return "This Monday, I will go to the office."
    }
    else { return `This Monday, I will ${something}.`}
};
mondayWork();

function wrapAdjective(sign="*"){
    return function (adjective="special"){
           return `You are ${sign}${adjective}${sign}!`;
        };
    };
wrapAdjective(sign)(adjective);