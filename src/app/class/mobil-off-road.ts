export class MobilOffRoad {

    mesin: string = "";
    tenaga: number = 0;

    SetMesin(mesin: string){
        this.mesin = mesin;
    }

    SetTenaga(tenaga: number){
        this.tenaga = tenaga;
    }

    GetMesin(){
        return this.mesin;
    }

    GetTenaga(){
        return this.tenaga;
    }
}
