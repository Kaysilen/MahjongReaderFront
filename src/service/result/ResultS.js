let instResultS_ = null;

export default class ResultS {
 
    LRS_URL = "http://localhost:5000/";

    static getInstance() {
        // Only creates service object at first call
        if (instResultS_ === null)
        {
            instResultS_ = new ResultS();
        }
        return instResultS_;
    }

    async sendForAnalysisCard(mahjongJson){
        let urlMethod = "/analysisMahjongCard";
 
        let json = await(await fetch(urlMethod, {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(mahjongJson)
        })).json();

        console.log(JSON.stringify(json));
        return json;
        
    }


    async example(jsonArray){
        let urlMethod = "StatementList?action=Create";
        let probDtoStr = JSON.stringify(
            {dto:
                {
                Arr:jsonArray,
                }
            }
        );
        let json = await(await fetch(this.LRS_URL+urlMethod, {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: probDtoStr
        })).json();

        return json;
        
    }
}

