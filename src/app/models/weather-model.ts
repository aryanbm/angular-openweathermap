export class weatherDetail {
    weatherID!: string;
    weatherMain!: string;
    weatherDescription!: string;
    temp!: number;
    feelslike!: number;
    wind!: number;
    humidity!: string;
    visibility!: string;
    weatherIcon! : string;
    float2int(value: number){
        return value | 0;
    }
    constructor(responseData: any){
        this.weatherID = responseData["weather"][0]["id"];
        this.weatherMain = responseData["weather"][0]["main"];
        this.weatherDescription = responseData["weather"][0]["description"];
        this.temp = this.float2int(responseData["main"]["temp"]) ;
        this.feelslike = this.float2int(responseData["main"]["feels_like"]) ;
        this.wind = responseData["wind"]["speed"];
        this.humidity = responseData["main"]["humidity"];
        this.visibility = responseData["visibility"];
        this.weatherIcon = responseData["weather"]["icon"]
    }
}