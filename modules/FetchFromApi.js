import Common from './Common.js';
import Data from './data.js';

class FetchFromApi {

  constructor() {
    this.listApiData();
    this.FetchApiElement = document.querySelector(".ShowData");
    //this.iLoveLasagne()--  just to see data from API;
  }

  async listApiData() {
    let ApiData = await Data.getApiData();
    const data = [ApiData];



    let show = document.querySelector(".here");
    let showEverything = document.querySelector('.card');
    this.FetchApiElement.addEventListener("click", () => {
      this.FetchApiElement.innerHTML = "Time:  "+ApiData.time;
      //I have created a class Common that holds the method toDom

      // loops through the json and gets the currency elements, rates and name
      for (let x of Object.keys(ApiData.rates)) {
        let listElement = Common.toDom(`
      <div class="col-md-4 cards p-4 m-2">
      

      <div class="card-body">
    <h3 class="card-title">${x}</h3> 
    <p >Rate for USD: ${ApiData.rates[x].rate}</p>
    <p >Name: ${ApiData.rates[x].name}</p>
    
      <!--<p>Time: ${ApiData.time}</p>-->
    
      </div>
      </div>
    `);
        show.appendChild(listElement);
      }
    });
  }

}
export default FetchFromApi;