abstract class wrapperMethod{

    browserName:string="chrome"
    abstract browserVersion:number

    alert(){
       console.log("Handle all the alerts in the page");
    
    }
    abstract snap():void

}

class concrete extends wrapperMethod{

    browserVersion: number=160

    snap(): void {
        console.log("snap is captured");
        
    }

}

let cn=new concrete()
cn.alert()
cn.snap()
console.log(cn.browserName);
console.log(cn.browserVersion);
