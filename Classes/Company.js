// year founded number
// Name cheapCompanies(string)
// business area (String)

//2
// -->Car extends the company attributes

//3 class

class Company{
  constructor( year, ceo, businessArea, country){
    this.year = year;
    this.ceo = ceo;
    this.businessArea = businessArea;
  }
}


class AlfaRomeo extends Car{
  constractor(){
    super();
    this.symbol="Alfa Romeo";
    this.style='Sport';
    this.numEngine=1;
    this.design='toImpress';
  }
}

class Mercedes extends Car{
  constructor(){
      super();
      this.symbol='ThreeStar';
      this.style='Elegant';
      this.numEngine=1;
      this.design='perfectionism';
    }
  }


class BmvAuto extends Car{
  constructor(){
      super();
      this.symbol='quadrant';
      this.style = 'Sport';
      this.numEngine = 1;
      this.design = 'accurate';
    }
  }


  class CarAlfa extends AlfaRomeo{
    constructor(){
      super(false,false,false,true);
      this.wheels=4;
      this.hasEngine=true;
    }
  }

let alfa = new AlfaRomeo(1910,'Romeo','automative','Italy');

let mercedes1 = new Mercedes(1926,'Karl Benz, Gottlieb Daimler','automative','Germany');

let bmv1 = new BmvAuto(1916,'Karl Rapp','automative','Germany');

console.log(alfa);
console.log(mercedes1);
console.log(bmv1);
