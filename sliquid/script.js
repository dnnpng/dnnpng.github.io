let sheetID = "1vaoQ4z4C6MdB-llXhbdQx7ahPmHtPc3zgKUcaSZ7UZM"
let tabName = 'sliquid'

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    
    for (let sheetRow of data){

        let thisProduct = sheetRow.Product;
        let thisBase = sheetRow.Base;
        let thisStimulation = sheetRow.Stimulating;
        let thisTexture = sheetRow.Texture;
        let thisLongevity = sheetRow.Long_lasting;
        let thisThickness = sheetRow.Thickness;
        let thisFlavour = sheetRow.Flavour;

        // console.log(thisProduct, thisBase, thisStimulation, thisTexture, thisLongevity, thisThickness, thisFlavour);
        
    let container = document.createElement("DIV");
    container.classList.add("container");

    let shapeContainer = document.createElement("DIV");
    shapeContainer.classList.add("shapecontainer");

    let myDiv = document.createElement("DIV");
    myDiv.classList.add("lube");

    const description = document.createElement("DIV");
    description.classList.add("description");
        
        
        
        let leftDiv = document.createElement("DIV");
        leftDiv.classList.add("leftDiv");

        // let rightDiv = document.createElement("DIV");
        // rightDiv.classList.add("rightDiv");

        
     
        
      

        myDiv.style.opacity = thisThickness*33 + "%";
        leftDiv.style.opacity = thisThickness*33 + "%";
        description.innerHTML = thisProduct;

        if (sheetRow.Base.includes("Water")) {
            myDiv.style.background = "#00A2E8";
            leftDiv.style.background = "#00A2E8";
            // rightDiv.style.background = "#00A2E8";
            if (sheetRow.Stimulating.includes("Yes")) {
                myDiv.style.clipPath = "polygon(100.00% 50.00%,89.00% 58.90%,95.05% 71.69%,81.27% 74.94%,81.17% 89.09%,67.36% 86.04%,61.13% 98.75%,50.00% 90.00%,38.87% 98.75%,32.64% 86.04%,18.83% 89.09%,18.73% 74.94%,4.95% 71.69%,11.00% 58.90%,0.00% 50.00%,11.00% 41.10%,4.95% 28.31%,18.73% 25.06%,18.83% 10.91%,32.64% 13.96%,38.87% 1.25%,50.00% 10.00%,61.13% 1.25%,67.36% 13.96%,81.17% 10.91%,81.27% 25.06%,95.05% 28.31%,89.00% 41.10%)";
                // shapeContainer.style.margin = 
            }
            if (sheetRow.Flavour.includes("Yes")) {
                myDiv.style.background = "radial-gradient(50% 50% at 50% 50%, #E80000 0%, #00A2E8 100%)";
            }
            if (sheetRow.Seaweed.includes("Yes"))  {
                myDiv.style.background = "linear-gradient(180deg, #02A7D8 50%, #20E800 100%)";
                leftDiv.style.background = "linear-gradient(180deg, #02A7D8 50%, #20E800 100%)";
            }
            if (sheetRow.Long_lasting.includes("Yes")) {
                shapeContainer.appendChild(leftDiv);
                // shapeContainer.appendChild(rightDiv);
            }
        }
        else if (sheetRow.Base.includes("Aloe")) {
            myDiv.style.background = "#098E3F";
            if (sheetRow.Stimulating.includes("Yes")) {
                myDiv.style.clipPath = "polygon(100.00% 50.00%,89.00% 58.90%,95.05% 71.69%,81.27% 74.94%,81.17% 89.09%,67.36% 86.04%,61.13% 98.75%,50.00% 90.00%,38.87% 98.75%,32.64% 86.04%,18.83% 89.09%,18.73% 74.94%,4.95% 71.69%,11.00% 58.90%,0.00% 50.00%,11.00% 41.10%,4.95% 28.31%,18.73% 25.06%,18.83% 10.91%,32.64% 13.96%,38.87% 1.25%,50.00% 10.00%,61.13% 1.25%,67.36% 13.96%,81.17% 10.91%,81.27% 25.06%,95.05% 28.31%,89.00% 41.10%)";
            }
            if (sheetRow.Seaweed.includes("Yes"))  {
                myDiv.style.background = "linear-gradient(180deg, rgba(0, 115, 46, 0.3) 50%, rgba(32, 232, 0, 0.3) 100%)";
                leftDiv.style.background = "linear-gradient(180deg, rgba(0, 115, 46, 0.3) 50%, rgba(32, 232, 0, 0.3) 100%)";
            }
        }
        else if (sheetRow.Base.includes("Water_Silicone")) {
            myDiv.style.background = "linear-gradient(180deg, rgba(0, 162, 232, 0.45) 0%, rgba(219, 217, 217, 0.45) 100%)";
            leftDiv.style.background = "linear-gradient(180deg, rgba(0, 162, 232, 0.45) 0%, rgba(219, 217, 217, 0.45) 100%)";
            if (sheetRow.Long_lasting.includes("Yes")) {
                shapeContainer.appendChild(leftDiv);
            }
        }
        else if (sheetRow.Base.includes("Aloe_Silicone")) {
            myDiv.style.background = "linear-gradient(180deg, rgba(0, 115, 46, 0.45) 0%, rgba(219, 217, 217, 0.45) 100%)";
            leftDiv.style.background = "linear-gradient(180deg, rgba(0, 115, 46, 0.45) 0%, rgba(219, 217, 217, 0.45) 100%)";
            if (sheetRow.Long_lasting.includes("Yes")) {
                shapeContainer.appendChild(leftDiv);
            }
        }

        else {
            myDiv.style.background = "#CFCDCD";
            leftDiv.style.background = "#CFCDCD";
            if (sheetRow.Stimulating.includes("Yes")) {
                myDiv.style.clipPath = "polygon(100.00% 50.00%,89.00% 58.90%,95.05% 71.69%,81.27% 74.94%,81.17% 89.09%,67.36% 86.04%,61.13% 98.75%,50.00% 90.00%,38.87% 98.75%,32.64% 86.04%,18.83% 89.09%,18.73% 74.94%,4.95% 71.69%,11.00% 58.90%,0.00% 50.00%,11.00% 41.10%,4.95% 28.31%,18.73% 25.06%,18.83% 10.91%,32.64% 13.96%,38.87% 1.25%,50.00% 10.00%,61.13% 1.25%,67.36% 13.96%,81.17% 10.91%,81.27% 25.06%,95.05% 28.31%,89.00% 41.10%)";
                leftDiv.style.clipPath = "polygon(100.00% 50.00%,89.00% 58.90%,95.05% 71.69%,81.27% 74.94%,81.17% 89.09%,67.36% 86.04%,61.13% 98.75%,50.00% 90.00%,38.87% 98.75%,32.64% 86.04%,18.83% 89.09%,18.73% 74.94%,4.95% 71.69%,11.00% 58.90%,0.00% 50.00%,11.00% 41.10%,4.95% 28.31%,18.73% 25.06%,18.83% 10.91%,32.64% 13.96%,38.87% 1.25%,50.00% 10.00%,61.13% 1.25%,67.36% 13.96%,81.17% 10.91%,81.27% 25.06%,95.05% 28.31%,89.00% 41.10%)";
            }
            if (sheetRow.Seaweed.includes("Yes"))  {
                myDiv.style.background = "linear-gradient(180deg, rgba(0, 115, 46, 0.3) 50%, rgba(32, 232, 0, 0.3) 100%)";
            }
            if (sheetRow.Long_lasting.includes("Yes")) {
                shapeContainer.appendChild(leftDiv);
            }
          }

        
    


    document.body.appendChild(container);
    container.appendChild(shapeContainer);
        shapeContainer.appendChild(myDiv);
    container.appendChild(description);

    }
    
    
	
    
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

