let orangePackage = 0;
let bluePackage = 0;
let greenPackage = 0;
// let greenPackages = 0;


    function incOrangePack ()  {
        document.getElementById("orangePackage").textContent = ++orangePackage;
        document.getElementById("orangePackages").innerHTML = 8000 * orangePackage;
        console.log(orangePackage)
            
    }
    function decOrangePack ()  {
        document.getElementById("orangePackage").textContent = --orangePackage;
        document.getElementById("orangePackages").innerHTML = 8000 * orangePackage;
        console.log(orangePackage)
            
    }
    function incBluePack ()  {
        document.getElementById("bluePackage").textContent = ++bluePackage;
        document.getElementById("bluePackages").innerHTML = 12000 * bluePackage;
        console.log(bluePackage)
            
    }
    function decBluePack ()  {
        document.getElementById("bluePackage").textContent = --bluePackage;
        document.getElementById("bluePackages").innerHTML = 12000 * bluePackage;
        console.log(bluePackage)
            
    }
    incGreenPack = function ()  {
        document.getElementById("greenPackage").textContent = ++greenPackage;
        document.getElementById("greenPackages").innerHTML = 15000 * greenPackage;
        console.log(greenPackage);
    
            
    }
    decGreenPack = function ()  {
        document.getElementById("greenPackage").textContent = --greenPackage;
        document.getElementById("greenPackages").innerHTML = 15000 * greenPackage;
        console.log(greenPackage);
            
    }
    