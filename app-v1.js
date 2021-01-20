// IE Compatibity
if (!Object.entries) {
    Object.entries = function( obj ){
      var ownProps = Object.keys( obj ),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
      while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
  
      return resArray;
    };
}


// id -> class
// id of the controller and classes that show for the controller



const offeringController = {
    "Class": "class-fields",
    "Experience-3": "exp-fields",
    "Collab": "brand-fields"
}

const typeController = {
    "online-trig": "online-fields",
    "offline-trig": "offline-fields"
}

const schedulingController = {
    "One-time-trig": "one-time-fields",
    "Repeating-trig":"repeat-fields",
    "ondemand-trig":"on-demand-fields"
}

// single injector
const controllerArray = [ offeringController, typeController, schedulingController] 

function removeReq(restClass) {
    $(`.${restClass}`).find('*').prop('required',false);
}

function makeReq(currClass) {
    $(`.${currClass}`).find('*').prop('required',true);
}


function handler(currId, currClass, conList) {
    console.log("clicked", $(`#${currId}`))
    console.log('hide :');
    // console.log($(control))
    for (const [idCon, classCon] of Object.entries(conList)) {
        if(idCon != currId) {
            // console.log($(`.${classCon}`));
            $(`.${classCon}`).slideUp();
            removeReq(classCon);
        }
    }
    console.log("show: ")
    // console.log($(`.${currClass}`))
    $(`.${currClass}`).slideDown();
    makeReq(currClass);
}

function checkEvent(control) {
    for (const [idCon, classCon] of Object.entries(control)) {
        // console.log(idCon, classCon);
        $(`#${idCon}`).click(()=> {
            handler(idCon, classCon, control)
        })
    }
}

checkEvent(typeController);

controllerArray.forEach((e)=> {
    checkEvent(e);
})