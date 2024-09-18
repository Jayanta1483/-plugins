let timer: (number | undefined) = undefined;

export const startTimer = function(callBack: () => void): void{
    timer = setInterval(() => {
        callBack();
    }, 3000);
}

export const stopTimer = function(): void{
    clearInterval(timer)
}